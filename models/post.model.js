import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        enum: [],

    },
    createur: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{timestamps: true});
const Post = mongoose.model('Post', postSchema);
export default Post;