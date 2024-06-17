const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const taskRouter = require('./task.router')
const teamRouter = require('./team.router')

router.use('/user', userRouter)
router.use('/task', taskRouter)
router.use('/team', teamRouter)


module.exports = router;