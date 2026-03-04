import express from 'express'
import { getPostController } from '../controllers/post/getPostController.js'
import { createPostController } from '../controllers/post/createPostController.js'
import { updatePostController } from '../controllers/post/updatePostController.js'
import { updateTitlePostController } from '../controllers/post/updateTitlePostController.js'
import { deletePostController } from '../controllers/post/deletePostController.js'

const router = express.Router()

router.get('/', getPostController)
router.post('/', createPostController)
router.put('/', updatePostController)
router.patch('/', updateTitlePostController)
router.delete('/', deletePostController)

export default router