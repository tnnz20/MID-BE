import * as userRepository from '../repositories/user.repository.js';
import validate from '../validations/validation.js';
import userValidation from '../validations/user-validation.js';
import ResponseError from '../error/response-error.js';
import bcrypt from 'bcrypt';

async function register(request) {
    const user = validate(userValidation.registerUserValidation, request);

    const isUserNameExist = await userRepository.countUser(user.username);

    if (isUserNameExist > 0) {
        throw new ResponseError(400, 'Username already exist');
    }

    user.password = await bcrypt.hash(user.password, 10);

    return userRepository.createUser(user);
}

export default { register };
