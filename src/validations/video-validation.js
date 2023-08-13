import Joi from 'joi';

export const addVideoValidation = Joi.object({
    title: Joi.string().required(),
    urlVideo: Joi.string().required().uri(),
    urlThumb: Joi.string().required().uri(),
});

export const getVideoIdValidation = Joi.string()
    .regex(/^[0-9a-fA-f]{24}$/)
    .required();

export const updateVideoValidation = Joi.object({
    title: Joi.string().optional(),
    urlVideo: Joi.string().optional().uri(),
    urlThumb: Joi.string().optional().uri(),
});
