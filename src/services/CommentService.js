import * as CommentRepositories from '../repositories/CommentRepository.js'
import * as VideoServices from '../services/VideoService.js'
import CustomError from '../utils/CustomError.js'

export function postComment(username, comment, videoId){
    if (!username || !comment || !videoId){
        throw new CustomError("There is empty data...", 400)
    }
    VideoServices.checkVideoId(videoId)
    return CommentRepositories.postComment(username, comment, videoId)
}
export function getComments(){
    return CommentRepositories.getComments()
}

export function getCommentByVideoId(videoId){
    VideoServices.checkVideoId(videoId)
    return CommentRepositories.getCommentByVideoId(videoId)
}

export function deleteCommentById(commentId){
    if(commentId.length < 24){
        throw new CustomError('Invalid Comment Id...', 400)
    }
    return CommentRepositories.deleteCommentById(commentId)
}

export function checkComment(Comment){
    if(!Comment){
        throw new CustomError('Comment not found...', 404)
    }
}