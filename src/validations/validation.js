import ResponseError from '../error/response-error.js';

function validate(schema, request) {
    const result = schema.validate(request, {
        allowUnknown: false,
    });

    if (result.error) {
        throw new ResponseError(400, result.error.message);
    } else {
        return result.value;
    }
}

export default validate;
