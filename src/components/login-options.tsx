'use client';

import { signIn, signOut } from 'next-auth/react';
import { ReactElement } from 'react';

export default function LoginOptions({ isAuthenticated }: { isAuthenticated: boolean }): ReactElement {
    return <div>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</div>;
}

function SignInButton() {
    return (
        <button className="btn" onClick={() => signIn()}>
            Sign In
        </button>
    );
}

function SignOutButton() {
    return (
        <button className="btn" onClick={() => signOut({ redirectTo: '/' })}>
            Sign Out
        </button>
    );
}
