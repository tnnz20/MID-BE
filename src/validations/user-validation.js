import Joi from 'joi';

const registerUserValidation = Joi.object({
    username: Joi.string().alphanum().lowercase().min(6).max(12).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export default { registerUserValidation };
