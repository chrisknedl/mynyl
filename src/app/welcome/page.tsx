'use client';

export default function WelcomePage() {
    return (
        <div>
            <h1 className="font-mono text-5xl">Welcome!</h1>
            <p>We bet you can&#39;t wait to tell your stories, but first, tell us some things about yourself:</p>
            <form onSubmit={submit}>
                <label htmlFor="username">First name:</label>
                <br />
                <input className="input" id="username" type="text" placeholder="Enter your username" />
            </form>
        </div>
    );
}

function submit() {}
