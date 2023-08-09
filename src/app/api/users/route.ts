import { connectDb } from '@/helper/db';
import { NextResponse } from 'next/server';
import { User } from '@/models/user';

// Connect to the database
connectDb();

// Get User Function 
export async function GET() {
    try {
        const users = await User.find().select("-password") ;

        const totalCount = await User.countDocuments({});

        return NextResponse.json({
            data: users,
            totalCount: totalCount,
        });
    } catch (err) {
        return NextResponse.json({
            message: "Failed to get users"
        });
    }
}

// POST Request Function
// Create User
export async function POST(request: Request) {
    try {
        const { name, email, password, about, profileURL } = await request.json();

        const user = new User({ name, email, password, about, profileURL });
        const createdUser = await user.save();

        return NextResponse.json(createdUser, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: 'Error in add user' }, { status: 401 });
    }
}

// Delete Request Function 
export function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    return NextResponse.json({
        message: `id : ${id} deleted`,
        status: true
    }, {
        status: 202,
        statusText: "user deleted successfully"
    });
}

export function PUT() {
    // Implement your PUT logic here
}
