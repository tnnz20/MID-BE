import Comment from '../models/comment.model.js';

export function postComment(request) {
    return Comment.create(request);
}

export function getCommentById(commentId) {
    return Comment.findById(commentId, { __v: 0 });
}

export function getCommentByVideoId(videoId) {
    return Comment.find({ videoId }, { __v: 0 }).populate(
        'userId',
        'username urlIMG'
    );
}

export function deleteCommentById(commentId) {
    return Comment.findByIdAndDelete(commentId);
}
