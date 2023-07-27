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