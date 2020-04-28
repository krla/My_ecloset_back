const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const clothesRouter = require('./clothes.router')
const looksRouter = require('./looks.router')

const { authUser } = require('../utils')

router.use('/auth', authRouter)
router.use('/users/me', authUser, usersRouter)
router.use('/me/clothes', authUser, clothesRouter)
router.use('/me/looks', authUser, looksRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
