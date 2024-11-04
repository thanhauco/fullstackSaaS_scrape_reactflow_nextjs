import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

// Define the function as a standalone function
export async function getUserByAccount(providerAccountId: string, provider: string) {
    try {
        const account = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: provider,
                    providerAccountId: providerAccountId,
                },
            },
            select: {
                user: true,
            },
        });
        return account?.user || null; // Return the user associated with the account
    } catch (error) {
        console.error("Error fetching user by account:", error);
        throw new Error("Could not fetch user by account");
    }
}

// ... other existing code ...