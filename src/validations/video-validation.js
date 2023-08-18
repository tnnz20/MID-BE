import Joi from 'joi';

export const addVideoValidation = Joi.object({
    title: Joi.string().required(),
    urlVideo: Joi.string().required().uri(),
    urlThumb: Joi.string().required().uri(),
    owner: Joi.string().required(),
});

export const getVideoIdValidation = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .min(24)
    .required();

export const searchVideoValidation = Joi.string().min(3).required();

export const updateVideoValidation = Joi.object({
    title: Joi.string().optional(),
    urlVideo: Joi.string().optional().uri(),
    urlThumb: Joi.string().optional().uri(),
});
