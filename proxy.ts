import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const hasAccess = request.cookies.get("checkout_access")?.value === "true";

  if (!hasAccess) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  // response.cookies.delete("checkout_access"); //Ensures that the user can only access through the Cart button (not directly through URL)
  return response;
}

export const config = {
  matcher: ["/checkout/:path*"],
};
