import mongoose from 'mongoose';

// creating a Schema for saving things in our database
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//now we have a schema, we need to convert that into a model.
const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting a freshly creatd monhoose model which can further be used for different operations 
// like post,create, delete, update etc.
export default PostMessage; 