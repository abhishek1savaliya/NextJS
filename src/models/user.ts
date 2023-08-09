import mongoose, { Schema } from "mongoose";

// Make sure this code is not being executed multiple times

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,  
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },
    profileURL: {
        type: String,
        // required: true
    },
}, {
    timestamps: true 
});

delete mongoose.connection.models['User'];

export const User = mongoose.model("User", UserSchema);
