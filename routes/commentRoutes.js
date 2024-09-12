import express from 'express';
import {getComment,getComments,updateComment,createComment,deleteComment, getCommentsByBlog} from '../controllers/commentController.js';
const router =express.Router()

router.get('/',getComments)
router.get('/:id',getComment)
router.get('/blog/:blogId',getCommentsByBlog)
router.post('/',createComment)
router.put('/:id',updateComment)
router.delete('/:id',deleteComment)

export default router;
