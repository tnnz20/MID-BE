import mongoose from "mongoose";

const Schema = mongoose.Schema

const videoSchema = new Schema({
        title: {
            type: String,
            required: [true, 'title not defined']
        },
        url: [{
                urlVideo: {
                    type: String,
                    isUrl: true,
                    required: [true, 'url video not defined']
                },
                urlThumb: {
                    type: String,
                    isUrl: true,
                    required: [true, 'url thumbnail not defined']
                },
                _id : false 
            }
        ],
        views: {
            type:Number,
            min:0,
            default:0
        },
        like: {
            type:Number,
            min:0,
            default:0
        },
    },
    {timestamps:true}
)

const Video = mongoose.model('Video', videoSchema)

export default Video