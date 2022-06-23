const UserModel = require('./model');


function findAll() {
    return UserModel.find({});
}

function findById(id) {
    return UserModel.findById(id);
}

function findByEmail(Email) {
    return UserModel.findOne({email: Email});
}

function create(profile) {
    return UserModel.create(profile);
}

function updateById(_id, newNickName) {
    return UserModel.updateOne({ _id }, newNickName);
}

function deleteById(id) {
    return UserModel.deleteOne({ id });
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    create,
    updateById,
    deleteById,
}