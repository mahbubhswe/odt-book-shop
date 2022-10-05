import { NextResponse } from "next/server";
export async function middleware(request) {
  //chack user is login or not
//   if (isAuth) {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/login", request.url));
//     }
    return NextResponse.next();
}

export const config = {
  matcher: ["/book-list/:path*", "/free-book-list/:path*"],
};
