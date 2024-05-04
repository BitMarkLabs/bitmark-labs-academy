import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware ({
  publicRoutes: ["/", "/api/webhook", "/api/uploadthing", "/api/courses"],
  debug: true
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};