import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export default async function UserRedirectPage() {
    // const session = await auth();
    // if (session) {
    //     const profile = await prisma.userProfile.findFirstOrThrow({
    //         where: {
    //             userId: session.user?.id,
    //         },
    //     });
    //     redirect(`/user/${profile.id}`);
    //}
}
