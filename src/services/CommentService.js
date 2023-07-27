import * as CommentRepositories from '../repositories/CommentRepository.js'
import CustomError from '../utils/CustomError.js'

export function postComment(user, comment, videoId){
    if (!user || !comment || !videoId){
        throw new CustomError("There is empty data...", 400)
    }
    return CommentRepositories.postComment(user, comment, videoId)
}
export function getComments(){
    return CommentRepositories.getComments()
}

export function getCommentByVideoId(videoId){
    return CommentRepositories.getCommentByVideoId(videoId)
}