import User from '../models/users.model.js';

export function createUser(request) {
    return User.create(request);
}

export function findUser(request) {
    return User.findOne({ username: request.username });
}

export function findUserById(request) {
    return User.findById(request, { password: 0 });
}

export function countUser(username) {
    return User.countDocuments({ username: username });
}

export function countEmail(email) {
    return User.countDocuments({ email: email });
}
