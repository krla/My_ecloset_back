const router = require('express').Router()

const {
  getAllMyClothes,
  addCloth,
  deleteCloth
} = require('../controllers/clothes.controller')

router.get('/', getAllMyClothes)
router.post('/', addCloth)
router.delete('/:id', deleteCloth)

module.exports = router
