import express from 'express';
import * as userController from '../controllers/user.controller.js';
import * as videoController from '../controllers/video.controller.js';
import * as productController from '../controllers/product.controller.js';
import * as commentController from '../controllers/comment.controller.js';

const publicRouter = new express.Router();

// User API
publicRouter.route('/users/register').post(userController.register);
publicRouter.route('/users/login').post(userController.login);

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
publicRouter.route('/products').get(productController.getProducts);

publicRouter
    .route('/products/:productId')
    .get(productController.getProductById);

publicRouter
    .route('/videos/video/:videoId/products')
    .get(productController.getProductByVideoId)
    .post(productController.addProduct);

// Comment API
publicRouter
    .route('/videos/video/:videoId/comments')
    .get(commentController.getCommentByVideoId);

export { publicRouter };
