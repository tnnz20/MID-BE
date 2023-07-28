import * as VideoRepositories from '../repositories/VideoRepository.js'
import CustomError from '../utils/CustomError.js'

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
    checkVideoId(videoId)
    return VideoRepositories.getVideoById(videoId)
}

export function searchVideoByName(textSearch){

    return VideoRepositories.searchVideoByName(textSearch)
}

export function deleteVideoById(videoId){
    checkVideoId(videoId)
    return VideoRepositories.deleteVideoById(videoId)
}

export function checkVideo(Video){
    if (!Video){
        throw new CustomError('Video not found...', 404)
    }
}

export function checkVideoId(videoId){
    if (videoId.length < 24){
        throw new CustomError('Video Id not valid...', 400)
    }
}
