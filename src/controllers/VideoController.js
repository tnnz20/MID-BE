import * as VideoServices from './../services/VideoService.js'

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
        const searchName = req.query.search
        if (searchName){
            const searchVideo = await VideoServices.searchVideoByName(searchName)
            res.status(200).json({
                message: 'Videos was retrieve successfully...',
                count: searchVideo.length,
                data: searchVideo
            });
        }
        const Videos = await VideoServices.getVideos()
        res.status(200).json({
            message: 'Videos was retrieve successfully...',
            count: Videos.length,
            data: Videos
        });
    } catch (error) {
        next(error)
    }
}

export async function getVideoById(req, res, next){
    try {
        const videoId = req.params.videoId
        const Video = await VideoServices.getVideoById(videoId)
        res.status(200).json({
            message: 'Video was retrieve successfully...',
            data: Video
        });
    } catch (error) {
        next(error)
    }
}

// export async function searchVideoByName(req, res, next){
//     try {
//         const text = req.query.search
//         const result = await VideoServices.searchVideoByName(text)
//         res.status(200).json({
//             message: 'Video was retrieve successfully...',
//             data: result
//         });
//     } catch (error) {
//         next(error)
//     }
// }