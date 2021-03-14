const express = require('express')
const postsValidator = require('../validators/post')
const postsController = require('../controllers/post')

const router = express.Router()

router.get('/', postsController.getPosts )
router.post('/post', postsValidator.postsValidator ,postsController.createPost)

module.exports = router