import { auth } from '@/lib/auth';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export default async function Dashboard() {
    const session: Session | null = await auth();
    if (!session) {
        redirect('/login');
    }

    const isNewUser: boolean = (
        await prisma.user.findFirstOrThrow({
            where: {
                email: session.user!.email!,
            },
        })
    ).isNewUser;

    if (isNewUser) {
        redirect('/welcome');
    }

    return <p>{session?.user?.name}</p>;
}
