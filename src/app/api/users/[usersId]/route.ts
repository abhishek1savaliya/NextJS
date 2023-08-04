import { NextResponse } from 'next/server'

export function DELETE(request, { params }) {
    console.log(params);
    const {usersId,title} = params
    console.log("User ID: "+params.usersId)

    return NextResponse.json({ message: "Dynamic Delete is working" })
}