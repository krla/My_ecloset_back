const LooksModel = require('../models/looks.model')
const { handleError } = require('../utils')

module.exports = {
  getAllMyLooks,
  createLook,
  getLookById,
  updateLookById,
  deleteLookById,
  addsClothToMyLook,
  removeClothToMyLook
}

function getAllMyLooks (req, res) {
  const userId = res.locals.user._id
  LooksModel
    .find({ user: userId })
    .populate('clothes')
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
    .populate('clothes')
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

function addsClothToMyLook (req, res) {
  const clothId = req.body.cloth
  console.log(clothId)
  LooksModel
    .findById(req.params.id)
    .then(look => {
      look.clothes.push(clothId)
      look.save()
      res.json(look)
    })
    .catch(err => console.log(err))
}

function removeClothToMyLook (req, res) {
  const clothId = req.body.cloth
  LooksModel
    .findById(req.params.id)
    .then(look => {
      look.clothes.pull(clothId)
      look.save()
      res.json(look)
    })
    .catch(err => console.log(err))
}
