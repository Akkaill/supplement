import { NextResponse } from "next/server";
export async function middleware(request) {
  try {
    const token = request.cookies.get("token");
    const response = await fetch(
      `${process.env.STARPI_BASE_URL}/api/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type' : "application/json",
          'Authorization': `Bearer ${token.value}`
        },
      }
    );

    if (!response.ok) {
      throw new Error("Login fail");
    }
    const responseJson = await response.json();
    console.log("response", responseJson);
    return NextResponse.next();
  } catch (error) {
    console.log("error", error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: "/special-products/:path*",
};
