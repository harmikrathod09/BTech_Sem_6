import { NextRequest, NextResponse } from "next/server";
import { URL } from "node:url";
export function proxy(req: NextRequest){
console.log("Hello World")
if(req.url.indexOf('home')==-1){
return NextResponse.redirect(new URL('/pages/home', req.url))
}
}
export const config = {
matcher: [
//"/((?!/pages/home|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
"/api/:path"
],
}