// import thu vien.
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true, index: true},
    password: {type: String}
}, {collection : 'User'});

let CarsModel = mongoose.model('Car', CarSchema);

CarsModel.getAll = () => {
    return CarsModel.find({});
}

CarsModel.addCar = (carToAdd) => {
    return carToAdd.save();
}

CarsModel.removeCar = (carName) => {
    return CarsModel.remove({name: carName});
}

export default CarsModel;
