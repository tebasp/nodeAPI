const Post = require('../models/post')

exports.getPosts = (req, res) => {
    Post.find()
    .select('_id title body')
    .then((posts) => res.json({
        posts
    }))
    .catch((error) => console.log(error))
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    post.save().then((result) => {
        res.json({
            post: result
        })
    })
}