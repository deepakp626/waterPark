import express from 'express';
import UserController from '../Controllers/device/userController.js';
import paymentController from '../Controllers/device/paymentController.js';
import getAllUsersController from '../Controllers/admin/getAllUsers.js';

const router = express.Router();

router.get("/allUsers",getAllUsersController.allUsers)

export default router;