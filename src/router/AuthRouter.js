const router = require('express').Router()

const AuthController = require('../controller/AuthController')

router.post("/register", AuthController.Register)
router.post("/login", AuthController.Login)

module.exports = router