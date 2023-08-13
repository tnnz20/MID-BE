import User from '../models/users.model.js';

export function createUser({ username, name, email, password }) {
    return User.create({ username, name, email, password });
}

export function countUser(username) {
    return User.countDocuments({ username: username });
}
