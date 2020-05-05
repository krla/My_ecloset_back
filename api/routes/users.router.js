const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updatePassword,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getUserById)
router.put('/', updateUser)
router.put('/password', updatePassword)
router.delete('/', deleteUserById)

module.exports = router
