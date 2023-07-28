import * as CommentControllers from './../controllers/CommentController.js'

import { Router } from "express";
const CommentRouter = Router()


CommentRouter.route('/')
    .get(CommentControllers.getComments)
    .delete(CommentControllers.deleteCommentById)

CommentRouter.route('/:videoId/comment/')
    .post(CommentControllers.postComment)
    .get(CommentControllers.getCommentByVideoId)


export default CommentRouter