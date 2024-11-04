// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma/prisma"; // Adjust the path according to your project structure
import { Session } from "next-auth";

// Extend the Session type
interface CustomSession extends Session {
  user: {
    id: string; // Add the id property
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      // Ensure session.user is defined
      if (!session.user) {
        session.user = { id: user.id, name: null, email: null, image: null }; // Initialize user with all properties
      } else {
        session.user.id = user.id; // Assign user.id if user is already defined
      }
      return session as CustomSession; // Cast session to CustomSession
    },
    async signIn({ user, account }) {
      // Custom sign-in logic (if needed)
      return true;
    },
  },
});