'use client';

import { signIn } from 'next-auth/react';

export default function SignUpPage() {
    return (
        <div className="flex justify-center">
            <button className="btn" onClick={() => signIn('github', { redirectTo: '/dashboard' })}>
                Sign in with GitHub
            </button>
        </div>
    );
    // return (
    //     <div className="flex justify-center">
    //         <div className="border-foreground flex flex-col rounded-2xl border-2 p-4 pt-2 pb-4">
    //             <p className="ms-1 mb-6 text-2xl font-bold">Sign up</p>
    //             <label className="text-md ms-2 font-medium">Email</label>
    //             <input className="input text-lg" placeholder="your@email.com" type="email"></input>
    //         </div>
    //     </div>
    // );
}
