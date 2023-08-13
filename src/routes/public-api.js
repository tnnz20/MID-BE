import express from 'express';
import * as userController from '../controllers/user.controller.js';
import * as videoController from '../controllers/video.controller.js';

const publicRouter = new express.Router();

// User API
publicRouter.route('/users/register').post(userController.register);

// Video API
publicRouter
    .route('/videos')
    .get(videoController.getVideos)
    .post(videoController.addVideo);

publicRouter
    .route('/videos/video/:videoId')
    .get(videoController.getVideoById)
    .delete(videoController.deleteVideo)
    .patch(videoController.updateVideoById);

// Product API

// Comment API

export { publicRouter };
