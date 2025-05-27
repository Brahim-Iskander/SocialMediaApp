import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio :{
        type: String,
        default: ''
    },
    picture: {
        type: String,
        default: ''
    },
    birthdate: {
        type: Date,
        default: null
    },
},{timestamps: true});
const User = mongoose.model('User', userSchema);
export default User;