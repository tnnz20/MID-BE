import * as CommentsServices from '../services/comment.service.js';

export async function postComment(req, res, next) {
    try {
        const request = req.body;
        const videoId = req.params.videoId;
        const userId = req.user.id;
        const newComment = await CommentsServices.postComment(
            videoId,
            userId,
            request
        );
        res.status(201).json({
            message: 'Comment was added successfully...',
            data: newComment,
        });
    } catch (error) {
        next(error);
    }
}

export async function getCommentByVideoId(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const comment = await CommentsServices.getCommentByVideoId(videoId);
        res.status(200).json({
            message: 'Comments was retrieve successfully...',
            count: comment.length,
            data: comment,
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteCommentById(req, res, next) {
    try {
        const commentId = req.params.commentId;
        const userId = req.user.id;
        const comment = await CommentsServices.deleteCommentById(
            userId,
            commentId
        );

        res.status(202).json({
            message: 'Comment was deleted successfully...',
            data: comment,
        });
    } catch (error) {
        next(error);
    }
}
