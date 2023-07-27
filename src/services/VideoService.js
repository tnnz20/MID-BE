import CustomError from '../utils/CustomError.js'
import * as VideoRepositories from '../repositories/VideoRepository.js'

export function addVideo(title, urlVideo, urlThumb){
    if (!title || !urlVideo || !urlThumb){
        throw new CustomError("There is empty data...", 400)
    }
    const url = { urlVideo, urlThumb }
    return VideoRepositories.Create(title, url)
}