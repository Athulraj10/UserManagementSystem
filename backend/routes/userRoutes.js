import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = express.Router();


router.get('/', registerUser);
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

export default router;
