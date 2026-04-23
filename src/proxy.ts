import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_UNLOCK_COOKIE, SITE_UNLOCK_VALUE } from "@/lib/site-gate";

export function proxy(request: NextRequest) {
  const unlocked = request.cookies.get(SITE_UNLOCK_COOKIE)?.value === SITE_UNLOCK_VALUE;
  if (unlocked) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match everything except: coming-soon, api/unlock, Next.js internals, and static files
    "/((?!coming-soon|api/unlock|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
