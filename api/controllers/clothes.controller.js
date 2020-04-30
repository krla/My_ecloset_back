const ClothesModel = require('../models/clothes.model')
const { handleError } = require('../utils')

module.exports = {
  getAllMyClothes,
  addCloth,
  getClothById,
  deleteCloth,
  filterByClothType
}

function getAllMyClothes (req, res) {
  const userId = res.locals.user._id
  ClothesModel
    .find({ user: userId })
    .then((looks) => res.json(looks))
    .catch((err) => handleError(err))
}

function addCloth (req, res) {
  const clothBody = { user: res.locals.user, ...req.body }
  ClothesModel
    .create(clothBody)
    .then((response) => res.json(response))
    .catch((err) => handleError(err))
}

function getClothById (req, res) {
  ClothesModel
    .findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteCloth (req, res) {
  ClothesModel
    .findByIdAndDelete({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function filterByClothType (req, res) {
  var clothFilter = {}
  if (req.query.cloth_type) {
    clothFilter = {
      cloth_type: {
        $regex: `${req.query.cloth_type}`,
        $options: 'i'
      }
    }
  }
  ClothesModel.find(clothFilter)
    .then((clothes) => {
      res.json(clothes)
    })
    .catch((err) => handleError(err))
}
