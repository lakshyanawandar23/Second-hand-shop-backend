import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
  deleteUser,
  updateUserProfile,
  getUserById,
  
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
router.route('/').post(registerUser).get(protect, admin, getUsers)

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .put(protect, updateUserProfile)
  .get(protect, getUserById)
export default router
