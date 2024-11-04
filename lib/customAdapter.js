import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CustomAdapter = PrismaAdapter(prisma);

CustomAdapter.getUserByAccount = async (providerAccountId) => {
    const account = await prisma.account.findUnique({
        where: {
            provider: "google",
            providerAccountId: providerAccountId,
        },
        select: {
            user: true,
        },
    });
    return account;
};

export { CustomAdapter };