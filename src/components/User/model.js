const { Schema } = require('mongoose');
const connections = require('../../config/connections');

const UserSchema = new Schema(
    {
        nickName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        collection: 'usermodel',
        versionKey: false,
    },
);

module.exports = connections.model('UserModel', UserSchema);