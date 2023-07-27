import Video from "../models/Videos.js";

export function Create(title, url){
    const newVideo = new Video({
        title,
        url
    })
    return newVideo.save()
}

export function getVideos(){
    return Video.find({}, {__v:0})
}

export function getVideoById(videoId){
    return Video.findById(videoId, {__v:0})
}