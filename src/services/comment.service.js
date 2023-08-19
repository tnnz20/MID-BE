import * as CommentRepositories from '../repositories/comment.repository.js';
import ResponseError from '../error/response-error.js';
import validate from '../validations/validation.js';
import * as commentValidation from '../validations/comment-validation.js';
import { getVideoById } from '../repositories/video.repository.js';
import { getUser } from '../services/user.service.js';

export async function postComment(videoId, userId, request) {
    const video = await getVideoById(videoId);
    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    request.videoId = videoId;

    const user = await getUser(userId);
    request.userId = user._id.toHexString();

    const comment = validate(commentValidation.addCommentValidation, request);

    return await CommentRepositories.postComment(comment);
}

export async function getCommentByVideoId(videoId) {
    const video = await getVideoById(videoId);
    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }

    const comment = await CommentRepositories.getCommentByVideoId(videoId);

    if (comment.length === 0) {
        throw new ResponseError(404, 'Comment not found...');
    }
    return comment;
}

async function getCommentById(commentId) {
    commentId = validate(commentValidation.getCommentIdValidation, commentId);
    const comment = await CommentRepositories.getCommentById(commentId);
    if (!comment) {
        throw new ResponseError(404, 'Comment not found...');
    }
    return comment;
}

export async function deleteCommentById(userId, commentId) {
    const user_token = await getUser(userId);

    commentId = validate(commentValidation.getCommentIdValidation, commentId);
    const comment_user = await getCommentById(commentId);

    if (user_token._id.toHexString !== comment_user.userId.toHexString) {
        throw new ResponseError(403, 'You are not authorized to do this...');
    }

    return CommentRepositories.deleteCommentById(commentId);
}
