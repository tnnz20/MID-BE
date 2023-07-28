import * as VideoServices from './../services/VideoService.js'
import CustomError from '../utils/CustomError.js';

export async function addVideo(req, res, next){
    try {
        const {title, urlVideo, urlThumb} = req.body
        const newVideo = await VideoServices.addVideo(
            title,
            urlVideo,
            urlThumb
        )
        res.status(201).json({
            message: 'Video was added successfully...',
            data: newVideo
        });
    } catch (error) {
        next(error)
    }
}

export async function getVideos(req, res, next){
    try {
        const textSearch = req.query.search

        if (textSearch){
            const searchVideo = await VideoServices.searchVideoByName(textSearch)
            if (searchVideo.length === 0){
                throw new CustomError(`Video title with ${textSearch} not found...`, 404)
            }
            res.status(200).json({
                message: 'Videos was retrieve successfully...',
                count: searchVideo.length,
                data: searchVideo
            });
        }else{
            const Videos = await VideoServices.getVideos()
            if (Videos.length === 0){
                throw new CustomError('Collection Videos still empty...', 404)
            }
            res.status(200).json({
                message: 'Videos was retrieve successfully...',
                count: Videos.length,
                data: Videos
            });
        }
    } catch (error) {
        next(error)
    }
}

export async function getVideoById(req, res, next){
    try {
        const videoId = req.params.videoId
        const Video = await VideoServices.getVideoById(videoId)
        VideoServices.checkVideo(Video)
        res.status(200).json({
            message: 'Video was retrieve successfully...',
            data: Video
        });
    } catch (error) {
        next(error)
    }
}

export async function deleteVideo(req, res, next){
    try {
        const videoId = req.query.videoId
        const Video = await VideoServices.deleteVideoById(videoId)
        VideoServices.checkVideo(Video)
        res.status(202).json({
            message: 'Video was deleted successfully...',
            data: Video
        });
    } catch (error) {
        next(error)
    }
}
