import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware ({
  publicRoutes: ["/api/webhook", "/api/uploadthing"],
  debug: true
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};