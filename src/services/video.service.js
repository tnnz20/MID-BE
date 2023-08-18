import * as VideoRepositories from '../repositories/video.repository.js';
import * as videoValidation from '../validations/video-validation.js';
import validate from '../validations/validation.js';
import ResponseError from '../error/response-error.js';

async function checkVideoIsNotEmpty() {
    const totalVideos = await VideoRepositories.countTotalVideo();
    if (totalVideos === 0) {
        throw new ResponseError(404, 'Collection video still empty');
    }
}

export async function addVideo(request) {
    const video = validate(videoValidation.addVideoValidation, request);

    return await VideoRepositories.addNewVideo(video);
}

export async function getVideos() {
    checkVideoIsNotEmpty();

    return await VideoRepositories.getVideos();
}

export async function getVideoById(videoId) {
    checkVideoIsNotEmpty();

    videoId = validate(videoValidation.getVideoIdValidation, videoId);

    let video = await VideoRepositories.getVideoById(videoId);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }

    video = await VideoRepositories.updateViewsVideoById(video._id);
    return video;
}

export async function searchVideoByName(request) {
    checkVideoIsNotEmpty();
    const textSearch = validate(videoValidation.searchVideoValidation, request);

    const searchVideo = await VideoRepositories.searchVideoByName(textSearch);

    if (searchVideo.length === 0) {
        throw new ResponseError(
            404,
            `Video with title ${request} not found...`
        );
    }
    return searchVideo;
}

export async function deleteVideoById(videoId) {
    checkVideoIsNotEmpty();

    videoId = validate(videoValidation.getVideoIdValidation, videoId);

    const video = await VideoRepositories.deleteVideoById(videoId);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    return video;
}

export async function updateVideoById(videoId, request) {
    checkVideoIsNotEmpty();

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
