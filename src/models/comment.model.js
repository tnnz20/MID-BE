import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        videoId: {
            type: mongoose.ObjectId,
            ref: 'Video',
            required: [true, 'videoId not defined'],
        },
        userId: {
            type: mongoose.ObjectId,
            ref: 'User',
            required: [true, 'user not defined'],
        },
        comment: {
            type: String,
            minLength: [
                1,
                'comment must be at least 1 characters, got {VALUE}',
            ],
            maxLength: [
                255,
                'comment must be at most 255 characters, got {VALUE}',
            ],
            required: [true, 'comment not defined'],
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
