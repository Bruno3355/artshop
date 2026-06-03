import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const hasAccess = request.cookies.get("checkout_access")?.value === "true";

  if (!hasAccess) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/checkout/:path*"],
};
