import jwt from 'jsonwebtoken';
import ResponseError from '../error/response-error.js';

export function authMiddleware(req, res, next) {
    const token = req.cookies.access_token;

    if (!token) {
        throw new ResponseError(401, 'Unauthorized');
    }

    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;

        next();
    } catch (error) {
        next();
    }
}
