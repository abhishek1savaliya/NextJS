import { NextResponse } from "next/server";

export function GET(request: Request){
     return NextResponse.json({
        "message" : "works api getting data" 
     })
}