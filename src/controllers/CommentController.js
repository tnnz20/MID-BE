import * as CommentsServices from "../services/CommentService.js"


export async function postComment(req, res, next){
    try {
        const { user, comment } = req.body
        const videoId = req.params.videoId
        const newComment = await CommentsServices.postComment(
            user, 
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
        res.status(200).json({
            message: 'Comments was retrieve successfully...',
            count: Comment.length,
            data: Comment
        })
    } catch (error) {
        next(error)
    }
}