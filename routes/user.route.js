import express from "express";
import userController from "../controllers/users.controller";

const router = express.Router();

router.post('login', (req, res) => {
    userController.login(req, res);
});

router.post('signup', (req, res) => {
    userController.signup(req, res);
});

export default router;
