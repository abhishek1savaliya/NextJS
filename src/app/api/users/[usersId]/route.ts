import { User } from '@/models/user';
import { NextResponse } from 'next/server'

export async function DELETE(request: Request, { params }) {
    const userId = params.usersId;
    try {
        await User.deleteOne({ _id: userId })
        return NextResponse.json({
            message: "user Deleted",
            success: true
        })
    }
    catch (err) {
        return NextResponse.json({ message: "Error in Delete User" })
    }
}

export async function GET(request: Request, { params }) {
    const userId = params.usersId;
    try {
    const user = await User.findById(userId).select("-password")
        return NextResponse.json(user)
    }
    catch (err) {
        return NextResponse.json({ message: "Error in get User" })
    }
}

export async function PUT(request: Request, { params }) {
    const userId = params.usersId;

    const { name, email, password, about, profileURL } = await request.json();

    try {
        const user = await User.findById(userId)
        user.name = name;
        user.about = about
        user.email = email
        user.password = password
        user.profileURL = profileURL

        const updateUser = await user.save()

        return NextResponse.json(updateUser)
    }
    catch (err) {
        return NextResponse.json({ message: "Error in update user" })
    }
}

