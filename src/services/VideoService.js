import CustomError from '../utils/CustomError.js'
import * as VideoRepositories from '../repositories/VideoRepository.js'

export function addVideo(title, urlVideo, urlThumb){
    if (!title || !urlVideo || !urlThumb){
        throw new CustomError("There is empty data...", 400)
    }
    const url = { urlVideo, urlThumb }
    return VideoRepositories.Create(title, url)
}

export function getVideos(){
    return VideoRepositories.getVideos()
}

export function getVideoById(videoId){
    return VideoRepositories.getVideoById(videoId)
}

export function searchVideoByName(text){
    if(!text){
        throw new CustomError("Name not found...", 400)
    }
    return VideoRepositories.searchVideoByName(text)
}

