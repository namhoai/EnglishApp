import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
}, {collection: 'User'});

let UsersModel = mongoose.model('User', UserSchema);

UsersModel.login = (username, password) => {
    return UsersModel.findOne({ username: username, password: password });
}

UsersModel.signup = (user) => {
    return user.save();
}

export default UsersModel;
