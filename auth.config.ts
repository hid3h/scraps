// https://nextjs.org/learn/dashboard-app/adding-authentication#protecting-your-routes-with-nextjs-middleware
// NextAuthConfigはnext-autnoのbeata(5系からある)
import type { NextAuthConfig } from "next-auth";

const publicPaths = ["/", "/scraps/*", "/terms", "/privacy"];

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isPublicPaths = publicPaths.some((path) => {
        const isEndWithAsterisk = path.endsWith("*");
        if (isEndWithAsterisk) {
          return nextUrl.pathname.startsWith(path.slice(0, -1));
        }
        return nextUrl.pathname === path;
      });
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
