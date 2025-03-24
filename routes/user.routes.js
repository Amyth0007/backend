import express from 'express';
import { createHistory, fetchUserData, fetchUserHistory, testing} from '../controllers/history.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/fetch', auth, fetchUserHistory);
router.get('/user', auth, fetchUserData);
router.post('/save', auth, createHistory);
router.post('/test',  testing);

export default router;
