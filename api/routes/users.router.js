const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getUserById)
router.put('/', updateUser)
router.delete('/', deleteUserById)

module.exports = router
