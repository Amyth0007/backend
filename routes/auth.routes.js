import express from 'express';
import { loginController, createUserController } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', loginController);
router.post('/signup', createUserController);

export default router;
