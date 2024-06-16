import express from 'express';
import UserController from '../Controllers/device/userController.js';
import paymentController from '../Controllers/device/paymentController.js';

const router = express.Router();

router.post('/register',UserController.registration);
router.post('/order',paymentController.order)
router.post('/verify',paymentController.paymentVarification);

export default router;