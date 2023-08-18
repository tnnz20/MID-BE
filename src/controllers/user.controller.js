import * as userService from '../services/user.service.js';

export async function register(request, response, next) {
    try {
        const user = await userService.register(request.body);

        const { username, name, email } = user;
        response.status(201).json({
            data: { username, name, email },
            message: 'User created successfully',
        });
    } catch (error) {
        next(error);
    }
}

export async function login(request, response, next) {
    try {
        const user_token = await userService.login(request.body);

        response.cookie('access_token', user_token, {
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 1000,
            secure: true,
        });

        response.status(200).json({
            data: response.cookie.access_token,
            message: 'User logged in successfully',
        });
    } catch (error) {
        next(error);
    }
}

export async function getUser(request, response, next) {
    try {
        const user = await userService.getUser(request.user.id);

        response.status(200).json({
            data: user,
            message: 'Data User retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
}

export async function logout(request, response, next) {
    try {
        await userService.logout(request.user.id);

        response.clearCookie('access_token');

        response.status(200).json({
            message: 'User logged out successfully',
        });
    } catch (error) {
        next(error);
    }
}
