import {getToken} from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // token will exist if user is loggged in
    const token = await getToken({
        req,
        secret: process.env.JWT_SECRET
    });

    const {pathname} = req.nextUrl;

    // allow request if following is true
    if(pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    if(!token && pathname != '/login'){
        return NextResponse.redirect('/login');
    }

}