import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'username not defined'],
            minLength: [
                6,
                'Username must be at least 6 characters, got {VALUE}',
            ],
            maxLength: [
                12,
                'Username must be at most 12 characters, got {VALUE}',
            ],
            unique: true,
            lowercase: true,
        },

        name: {
            type: String,
            required: [true, 'name not defined'],
        },

        email: {
            type: String,
            required: [true, 'email not defined'],
        },

        password: {
            type: String,
            required: [true, 'password not defined'],
            minLength: [
                8,
                'Password must be at least 8 characters, got {VALUE}',
            ],
        },

        urlIMG: {
            type: String,
            default: null,
        },
    },

    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
