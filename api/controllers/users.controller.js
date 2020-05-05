const UserModel = require('../models/users.model')
const { handleError } = require('../utils')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  getUserById,
  deleteUserById,
  updatePassword,
  updateUser
}

function getUserById (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findById(userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  const userId = res.locals.user._id
  UserModel
    .remove(userId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(user => {
      const userData = { username: user.name, email: user.email }
      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '30d' }
      )
      res.json({ token, ...userData })
    })
    .catch((err) => handleError(err, res))
}

function updatePassword (req, res) {
  bcrypt.compare(req.body.old, res.locals.user.password, (err, result) => {
    if (err) { handleError(err, res) }
    if (!result) {
      return res.json({
        error: `wrong password for ${res.locals.user.email}`
      })
    }
    UserModel
      .findById(res.locals.user._id)
      .then(user => {
        user.password = bcrypt.hashSync(req.body.new, 10)
        user.save()
        return res.json('ok')
      })
      .catch(err => handleError(err, res))
  })
}
