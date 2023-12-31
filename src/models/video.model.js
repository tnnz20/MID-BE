import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title not defined'],
        },
        urlVideo: {
            type: String,
            isUrl: true,
            required: [true, 'url video not defined'],
        },
        urlThumb: {
            type: String,
            isUrl: true,
            required: [true, 'url thumbnail not defined'],
        },
        owner: {
            type: String,
            required: [true, 'owner not defined'],
        },
        views: {
            type: Number,
            min: 0,
            default: 0,
        },
        like: {
            type: Number,
            min: 0,
            default: 0,
        },
    },
    { timestamps: true }
);

videoSchema.index({ title: 'text' });

const Video = mongoose.model('Video', videoSchema);

export default Video;
