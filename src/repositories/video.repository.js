import Video from '../models/video.model.js';

export function createNewVideo(request) {
    return Video.create(request);
}

export function getVideos() {
    return Video.find({}, { __v: 0 });
}

export function getVideoById(videoId) {
    return Video.findById(videoId, { __v: 0 });
}

export function searchVideoByName(request) {
    return Video.find({ $text: { $search: request } });
}

export function deleteVideoById(videoId) {
    return Video.findByIdAndDelete(videoId);
}

export function countTotalVideo() {
    return Video.countDocuments();
}

export function updateVideoById(videoId, request) {
    return Video.findByIdAndUpdate(
        videoId,
        {
            $set: request,
        },
        { new: true }
    );
}
