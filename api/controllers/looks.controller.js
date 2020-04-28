const LooksModel = require('../models/looks.model')
const { handleError } = require('../utils')

module.exports = {
  getAllMyLooks,
  createLook,
  getLookById,
  updateLookById,
  deleteLookById
//  addsClothToMyook,
//  removeClothToMyLook
}

function getAllMyLooks (req, res) {
  const userId = res.locals.user._id
  LooksModel
    .find({ user: userId })
    .then(looks => res.json(looks))
    .catch((err) => handleError(err))
}

function createLook (req, res) {
  const lookBody = { user: res.locals.user, ...req.body }
  LooksModel
    .create(lookBody)
    .then((response) => res.json(response))
    .catch((err) => handleError(err))
}

function getLookById (req, res) {
  LooksModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function updateLookById (req, res) {
  LooksModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteLookById (req, res) {
  LooksModel
    .findByIdAndDelete({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
