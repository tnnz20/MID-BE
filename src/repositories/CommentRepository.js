import Comment from "../models/Comments.js";

export function postComment(user, comment, videoId){
    const newComment = new Comment({
        user,
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
