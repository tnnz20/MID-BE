import * as userRepository from '../repositories/user.repository.js';
import validate from '../validations/validation.js';
import * as userValidation from '../validations/user-validation.js';
import ResponseError from '../error/response-error.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(request) {
    const user = validate(userValidation.registerUserValidation, request);

    const isUserNameExist = await userRepository.countUser(user.username);

    if (isUserNameExist > 0) {
        throw new ResponseError(400, 'Username already exist');
    }

    const isEmailExist = await userRepository.countEmail(user.email);

    if (isEmailExist > 0) {
        throw new ResponseError(400, 'Email already exist');
    }

    user.password = await bcrypt.hash(user.password, 10);

    return userRepository.createUser(user);
}

export async function login(request) {
    const loginRequest = validate(userValidation.loginUserValidation, request);

    const user = await userRepository.findUser(loginRequest);

    if (!user) {
        throw new ResponseError(400, 'Username not found');
    }

    const isPasswordValid = bcrypt.compare(
        loginRequest.password,
        user.password
    );

    if (!isPasswordValid) {
        throw new ResponseError(400, 'Invalid password');
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: '3h',
    });

    return accessToken;
}

export async function getUser(request) {
    const user_id = validate(userValidation.getUserValidation, request);

    const user = await userRepository.findUserById(user_id);

    if (!user) {
        throw new ResponseError(400, 'User not found');
    }

    return user;
}

export async function logout(request) {
    await getUser(request);
}
