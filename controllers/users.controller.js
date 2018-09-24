import User from '../models/users.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.login = async (req, res) => {
    try {
        const cars = await Car.getAll();
        logger.info('sending all cars...');
        res.send(cars);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.signup = async (req, res) => {
    let user = User({
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const savedUser = await User.signup(user);
        logger.info('Adding car...');
        res.send('added: ' + savedCar);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

export default controller;