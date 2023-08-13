import * as VideoServices from './../services/video.service.js';

export async function addVideo(req, res, next) {
    try {
        const request = req.body;
        const newVideo = await VideoServices.addVideo(request);
        res.status(201).json({
            message: 'Video was added successfully...',
            data: newVideo,
        });
    } catch (error) {
        next(error);
    }
}

export async function getVideos(req, res, next) {
    try {
        const textSearch = req.query.search;
        if (textSearch) {
            const searchVideo = await VideoServices.searchVideoByName(
                textSearch
            );
            res.status(200).json({
                message: 'Videos was retrieve successfully...',
                count: searchVideo.length,
                data: searchVideo,
            });
        } else {
            const video = await VideoServices.getVideos();

            res.status(200).json({
                message: 'Videos was retrieve successfully...',
                count: video.length,
                data: video,
            });
        }
    } catch (error) {
        next(error);
    }
}

export async function getVideoById(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const video = await VideoServices.getVideoById(videoId);
        console.log('ini video', video);
        res.status(200).json({
            message: 'Video was retrieve successfully...',
            data: video,
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteVideo(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const video = await VideoServices.deleteVideoById(videoId);
        res.status(202).json({
            message: 'Video was deleted successfully...',
            data: video,
        });
    } catch (error) {
        next(error);
    }
}

export async function updateVideoById(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const request = req.body;

        const video = await VideoServices.updateVideoById(videoId, request);
        res.status(202).json({
            message: 'Video was updated successfully...',
            data: video,
        });
    } catch (error) {
        next(error);
    }
}
