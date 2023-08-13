import ResponseError from '../error/response-error.js';

function notFoundMiddleware(req, res, next) {
    const error = new ResponseError(
        404,
        `Can't find ${req.originalUrl} on this server!`
    );
    next(error);
}

export { notFoundMiddleware };
