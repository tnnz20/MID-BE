import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
        username: {
            type:String,
            required: [true, 'user not defined']
        },
        comment: {
            type:String,
            required: [true, 'comment not defined']
        },
        videoId: {
            type: mongoose.ObjectId, 
            ref: "Video",
            required: [true, 'videoId not defined']
        }
    },
    {timestamps:true}
)


const Comment = mongoose.model('Comment', commentSchema)

export default Comment