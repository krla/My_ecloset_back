const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const closetsRouter = require('./closets.router')
const looksRouter = require('./looks.router')

const { authUser } = require('../utils')

router.use('/auth', authRouter)
router.use('/users/me', authUser, usersRouter)
router.use('/me/closets', authUser, closetsRouter)
router.use('/me', authUser, looksRouter)


router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
