import Joi from 'joi';

export const addCommentValidation = Joi.object({
    videoId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .min(24)
        .required(),
    userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .min(24)
        .required(),
    comment: Joi.string().min(1).max(255).required(),
});

export const getCommentIdValidation = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .min(24)
    .required();
