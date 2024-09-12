import express from 'express';
import {getBlog,getBlogs,createBlog,updateBlog,deleteBlog} from '../controllers/blogController.js';
import upload from '../middlewares/uploadImage.js';
const router =express.Router()

router.get('/',getBlogs)
router.get('/:id',getBlog)

router.post('/',upload.any(),createBlog)
router.put('/:id',upload.any(),updateBlog)
router.delete('/:id',deleteBlog)

export default router;
