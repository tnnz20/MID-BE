import Joi from 'joi';

export const addProductValidation = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(0).positive().required(),
    urlProduct: Joi.string().required().uri(),
    urlThumb: Joi.string().required().uri(),
    videoId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .min(24)
        .required(),
});

export const getProductIdValidation = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .min(24)
    .required();
