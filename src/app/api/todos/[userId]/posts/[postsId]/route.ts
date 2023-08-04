import { NextResponse } from "next/server";

export function GET(request, {params}){
    console.log(params.userId)
    console.log(params.postsId)
    return NextResponse.json(params)
}