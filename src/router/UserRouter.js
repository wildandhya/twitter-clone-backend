const router = require('express').Router()

const UserController = require('../controller/UserController')
const {authorization} = require('../middleware/authorization')

router.get("/", authorization, UserController.FindAllTweet)
router.post("/",  authorization ,UserController.PostTweet)
router.put("/:id", authorization ,UserController.UpdateTweet)
router.delete("/:id", authorization ,UserController.DeleteTweet)

module.exports = router