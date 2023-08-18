import Joi from 'joi';

export const registerUserValidation = Joi.object({
    username: Joi.string().alphanum().lowercase().min(6).max(12).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export const loginUserValidation = Joi.object({
    username: Joi.string().alphanum().lowercase().min(6).max(12).required(),
    password: Joi.string().min(8).required(),
});

export const getUserValidation = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .min(24)
    .required();
