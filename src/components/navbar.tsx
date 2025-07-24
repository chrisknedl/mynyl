import LoginOptions from '@/components/login-options';
import Link from 'next/link';
import { isAuthenticated } from '@/lib/services/auth-service';

export default async function Navbar() {
    const authenticated = await isAuthenticated();
    return (
        <div className="flex w-full items-center justify-between px-8 py-4">
            <Link className="cursor-pointer font-mono text-2xl font-bold" href={authenticated ? '/dashboard' : '/'}>
                Mynyl
            </Link>
            <LoginOptions isAuthenticated={authenticated} />
        </div>
    );
}
