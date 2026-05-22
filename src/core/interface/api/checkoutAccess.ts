// This file is used to ensure that a user can only access the Checkout page after adding items to the Cart.
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function handleCheckoutAccess(request: Request) {
  const cookieStore = await cookies();
  cookieStore.set("checkout_access", "true", { path: "/" });
  return NextResponse.redirect(new URL("/checkout", request.url));
}
