exports.postsValidator = (req, res, next) => {
    // title
    req.check('title', 'Write a title').notEmpty()
    req.check('title', 'The title must be between 4 and 150 chars').isLength({
        min: 4,
        max: 150,
    })

    // body
    req.check('body', 'Write a body').notEmpty()
    req.check('body', 'The body must be between 4 and 2000 chars').isLength({
        min: 4,
        max: 2000,
    })

    // check for errors
    const errors = req.validationErrors()

    if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.json({
            error: firstError,
        })
    }

    next()
}