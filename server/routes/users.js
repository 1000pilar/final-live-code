var express = require('express')
var router = express.Router()
var userController = require('../controllers/users.js')
var passport = require('passport')


router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signin)
router.get('/', userController.getAll)


module.exports = router
