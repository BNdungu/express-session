const express = require('express')
const {login, get} = require('./controller')

const router = express.Router()

router.post('/login/', login)
router.get('/',get)

module.exports = router