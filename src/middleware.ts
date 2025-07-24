import { auth } from '@/lib/auth';

export default auth(async (req) => {
    if (req.auth) {
        return;
    }
    const pathname = req.nextUrl.pathname;
    if (pathname !== '/' && pathname !== '/login') {
        console.log(req.nextUrl.pathname);
        const newUrl = new URL('/login', req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
