import * as VideoRepositories from '../repositories/video.repository.js';
import * as videoValidation from '../validations/video-validation.js';
import validate from '../validations/validation.js';
import ResponseError from '../error/response-error.js';

export async function addVideo(request) {
    const video = validate(videoValidation.addVideoValidation, request);

    return await VideoRepositories.createNewVideo(video);
}

export async function getVideos() {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }

    const videos = await VideoRepositories.getVideos();

    return videos;
}

export async function getVideoById(videoId) {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }

    videoId = validate(videoValidation.getVideoIdValidation, videoId);

    const video = await VideoRepositories.getVideoById(videoId);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    return video;
}

export async function searchVideoByName(request) {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }

    const searchVideo = await VideoRepositories.searchVideoByName(request);

    if (searchVideo.length === 0) {
        throw new ResponseError(
            404,
            `Video with title ${request} not found...`
        );
    }
    return searchVideo;
}

export async function deleteVideoById(videoId) {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }

    videoId = validate(videoValidation.getVideoIdValidation, videoId);

    const video = await VideoRepositories.deleteVideoById(videoId);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    return video;
}

export async function updateVideoById(videoId, request) {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }

    videoId = validate(videoValidation.getVideoIdValidation, videoId);

    if (Object.keys(request).length === 0) {
        throw new ResponseError(400, 'Request body cannot be empty');
    }

    const video = await VideoRepositories.updateVideoById(videoId, request);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    return video;
}
