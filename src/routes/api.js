import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';
import * as commentController from '../controllers/comment.controller.js';

const userRouter = new express.Router();

userRouter.use(authMiddleware);

// User API
userRouter
    .route('/users')
    .get(userController.getUser)
    .post(userController.logout);

// Comment API
userRouter
    .route('/videos/video/:videoId/comments')
    .post(commentController.postComment);

userRouter
    .route('/videos/video/:videoId/comments/comment/:commentId')
    .delete(commentController.deleteCommentById);

export { userRouter };
