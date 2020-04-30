const router = require('express').Router()

const {
  getAllMyClothes,
  addCloth,
  getClothById,
  deleteCloth,
  filterByClothType
} = require('../controllers/clothes.controller')

router.get('/', getAllMyClothes)
router.post('/', addCloth)
router.get('/:id', getClothById)
router.get('/type/', filterByClothType)
router.delete('/:id', deleteCloth)

module.exports = router
