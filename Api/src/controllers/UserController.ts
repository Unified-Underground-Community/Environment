import { PrismaClient, character, Gender } from '@prisma/client'

export async function getAllUsers(): Promise<null | character[]> {
    const prisma = new PrismaClient();

    try {
        return await prisma.character.findMany();
    } catch (e) {
        // Return Error Response
    } finally {
        await prisma.$disconnect();
    }

    return null;
}

export async function getUser(id: string): Promise<null | character> {
    const prisma = new PrismaClient();

    try {
        return await prisma.character.findFirst({
            where: {
                gender: Gender.M
            }
        });
    } catch (e) {
        // Return Error Response
    } finally {
        await prisma.$disconnect();
    }

    return null;
}