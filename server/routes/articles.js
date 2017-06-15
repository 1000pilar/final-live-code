var express = require('express')
var router = express.Router()
var articleController = require('../controllers/articles.js')
var helper = require('../helpers/jwtVerify.js')


router.post('/', helper.jwtVerify, articleController.create)
router.get('/', articleController.findAll)
router.get('/:category', articleController.findCategory)
router.put('/:id', helper.jwtVerify, articleController.update)
router.delete('/:id', helper.jwtVerify, articleController.delete)


module.exports = router
