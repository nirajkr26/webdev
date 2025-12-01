import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "niraj",
        email: "niraj123@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        user:"post"
    })
}