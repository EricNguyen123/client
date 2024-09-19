// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'vi'],
//   defaultLocale: 'vi'
// });

// export const config = {
//   matcher: ['/', '/(vi|en)/:path*']
// };

import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { decrypt } from './utils';
import { cookies } from 'next/headers';

const protectedRoutes = ['/account', '/profile', '/manage'];
const publicRoutes = ['/login', '/logout', '/', '/register', '/fanpage'];

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
});

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = cookies().get('session')?.value;
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || ''; 
  const session = cookie ? decrypt(cookie, secretKey) : null;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isPublicRoute && session && !path.startsWith('/')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
