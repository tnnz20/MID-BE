import * as CommentsServices from "../services/CommentService.js"
import CustomError from '../utils/CustomError.js';

export async function postComment(req, res, next){
    try {
        const { username, comment } = req.body
        const videoId = req.params.videoId
        const newComment = await CommentsServices.postComment(
            username, 
            comment, 
            videoId
        )
        res.status(201).json({
            message: 'Comment was added successfully...',
            data: newComment
        });
    } catch (error) {
        next(error)
    }
}

export async function getComments(req, res, next){
    try {
        const Comments = await CommentsServices.getComments()
        if(Comments.length === 0){
            throw new CustomError('Collection Comment still empty...', 404)
        }
        res.status(200).json({
            message: 'Comments was retrieve successfully...',
            count: Comments.length,
            data: Comments
        })
    } catch (error) {
        next(error)
    }
}

export async function getCommentByVideoId(req, res, next){
    try {
        const videoId = req.params.videoId
        const Comment = await CommentsServices.getCommentByVideoId(videoId)
        CommentsServices.checkComment(Comment)
        if (Comment.length === 0){
            throw new CustomError('Comment not found...', 404)
        }
        res.status(200).json({
            message: 'Comments was retrieve successfully...',
            count: Comment.length,
            data: Comment
        })
    } catch (error) {
        next(error)
    }
}

export async function deleteCommentById(req, res, next){
    try {
        const commentId = req.query.commentId
        const Comment = await CommentsServices.deleteCommentById(commentId)
        CommentsServices.checkComment(Comment)
        res.status(202).json({
            message: 'Comment was deleted successfully...',
            data: Comment
        });
    } catch (error) {
        next(error)
    }
}