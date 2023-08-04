import { NextResponse } from 'next/server'

//Get User Function 
export function GET() {
    const users = [
        {
            name: 'Krishna',
            phone: 9878654321,
            position: "God"
        },
        {
            name: 'Radha',
            phone: 9878654321,
            position: "God"
        },
        {
            name: 'Mohan',
            phone: 9878654321,
            position: "God"
        },
    ]
    return NextResponse.json(users)
}
let z = 0;
//POST Request Function
export async function POST(request) {
    const body = request.body;
    console.log(body)
    console.log(request.method);
    request.cookies.set('Krishna Creation', 'true')
    console.log(request.cookies);
    console.log(request.nextUrl.pathname)
    console.log(typeof request.nextUrl.searchParams)
    console.log(request.headers)
    const json = await request.json()
    console.log(json)

    // const text =await request.text()
    // console.log(text)
    z = z + 1;
    return NextResponse.json({
        message: `Posting User Data ${z}`,
    })
}


//Delete Request Function 
export function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    return NextResponse.json({
        message: `id : ${id} deleted`,
        status: true
    }, {
        status: 202,
        statusText: "user deleted successfully"
    })
}

export function PUT() {

}