import userService from '../services/user.service.js';

export async function register(request, response, next) {
    try {
        const user = await userService.register(request.body);
        response.status(201).json({
            data: user,
            message: 'User created successfully',
        });
    } catch (error) {
        next(error);
    }
}
