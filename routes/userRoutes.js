import express from 'express';
import {getUser,getUsers,updateUser,deleteUser,createUser, deleteAccount} from '../controllers/userController.js';
import { adminAuth } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadImage.js';
const router =express.Router()

router.get('/',getUsers)
router.get('/:id',getUser)

router.post('/',adminAuth,upload.any(),createUser)
router.put('/:id',upload.any(),updateUser)
router.delete('/account',deleteAccount)
router.delete('/:id',adminAuth,deleteUser)

export default router;