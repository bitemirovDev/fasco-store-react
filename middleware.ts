import { auth } from '@/auth';
import { publicRoutes, apiAuthPrefix, authRoutes, DEFAULT_REDIRECT_ROUTE } from './routes';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) return null;
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT_ROUTE, nextUrl));
    }

    return null;
  }
  if (!isLoggedIn && !isPublicRoute) return Response.redirect(new URL('/auth/login', nextUrl));

  return null;
});

export const config = {
  matcher: ['/auth/login', '/auth/register'],
};
