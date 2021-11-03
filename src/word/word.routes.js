const express = require('express')
const router = express.Router()

const wordController = require('./word.controller')

router.get('/', wordController.getWords)

module.exports = router