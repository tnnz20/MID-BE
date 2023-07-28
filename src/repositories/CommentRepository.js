import Comment from "../models/Comments.js";

export function postComment(username, comment, videoId){
    const newComment = new Comment({
        username,
        comment,
        videoId
    })
    return newComment.save()
}

export function getComments(){
    return Comment.find({}, {__v:0})
}

export function getCommentByVideoId(videoId){
    return Comment.find({"videoId":videoId})
}

export function deleteCommentById(commentId){
    return Comment.findByIdAndDelete(commentId)
}
