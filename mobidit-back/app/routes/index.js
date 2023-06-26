const router = require('express').Router();

//IMPORT SUB ROUTES
const users = require('./user');
// const posts = require('./posts');


router.use('/users', users);
// router.use('/posts', posts);


module.exports = router;