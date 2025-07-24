import NextAuth, { NextAuthConfig, User as GithubUser } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import prisma from '@/lib/prisma';
import { User } from '@prisma/client';

export const config: NextAuthConfig = {
    providers: [GitHub],
    pages: {
        signIn: '/login',
    },
    session: { strategy: 'jwt' },
    events: {
        async signIn({ user }: { user: GithubUser }) {
            const users: User[] = await prisma.user.findMany({
                where: {
                    email: user.email!,
                },
            });
            const isNewUser = users.length === 0;
            if (isNewUser) {
                createNewUser(user);
            } else {
                await prisma.user.update({
                    where: {
                        email: user.email!,
                    },
                    data: {
                        isNewUser: false,
                    },
                });
            }
        },
    },
};

async function createNewUser(user: GithubUser) {
    await prisma.profile.create({
        data: {
            user: {
                create: {
                    name: user.name ?? '',
                    email: user.email!,
                    isNewUser: true,
                },
            },
        },
    });
}

export const { handlers, auth, signIn, signOut } = NextAuth(config);
