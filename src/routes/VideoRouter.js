import * as VideoControllers from './../controllers/VideoController.js'

import { Router } from "express";
const VideoRouter = Router()

VideoRouter.route('/')
    .post(VideoControllers.addVideo)
    .get(VideoControllers.getVideos)

VideoRouter.route('/:videoId').get(VideoControllers.getVideoById)


export default VideoRouter