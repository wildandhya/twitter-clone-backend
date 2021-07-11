const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')

router.use('/api/v1/auth', AuthRouter)
router.use('/api/v1/user', UserRouter)

module.exports = router