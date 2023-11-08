// https://nextjs.org/learn/dashboard-app/adding-authentication#protecting-your-routes-with-nextjs-middleware
// NextAuthConfigはnext-autnoのbeata(5系からある)
import type { NextAuthConfig } from "next-auth";

const publicPaths = ["/"];

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return true;
      const isPublicPaths = publicPaths.some(
        (path) => nextUrl.pathname === path
      );
      if (isPublicPaths) {
        return true;
      }

      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        return true;
      }
      return Response.redirect(new URL("/", nextUrl));
    },
  },
} satisfies NextAuthConfig;
