import Video from "../models/Videos.js";

export function Create(title, url){
    const newVideo = new Video({
        title,
        url
    })
    return newVideo.save()
}