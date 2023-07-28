import * as VideoControllers from './../controllers/VideoController.js'

import { Router } from "express";
const VideoRouter = Router()

VideoRouter.route('/')
    .post(VideoControllers.addVideo)
    .get(VideoControllers.getVideos)
    .delete(VideoControllers.deleteVideo)

VideoRouter.route('/video/:videoId').get(VideoControllers.getVideoById)

export default VideoRouter