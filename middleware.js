<<<<<<< HEAD
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login
  }

  return NextResponse.next(); // Allow access if logged in
}

export const config = { matcher: ["/dashboard"] }; // Protect dashboard
=======
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login
  }

  return NextResponse.next(); // Allow access if logged in
}

export const config = { matcher: ["/dashboard"] }; // Protect dashboard
>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
