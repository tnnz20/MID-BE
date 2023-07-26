import mongoose from "mongoose";

const Schema = mongoose.Schema

const videoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title not defined']
    },
    thumbnail: {
        type: String,
        required: [true, 'thumbnail not defined']
    },
    url: {
        type: String,
        isUrl: true,
        required: [true, 'url not defined']
    },
    like: {
        type:Number,
        min:0,
        default:0
    },
    productID:[
        { type: mongoose.ObjectId, ref: "Product" }
    ],
    createAt:{
        type:Date,
        default: Date.now(),
    }
})

const Video = mongoose.model('Video', videoSchema)

export default Video