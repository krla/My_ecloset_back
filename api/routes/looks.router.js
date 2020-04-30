const router = require('express').Router()

const {
  getAllMyLooks,
  createLook,
  getLookById,
  updateLookById,
  deleteLookById,
  addsClothToMyLook,
  removeClothToMyLook
} = require('../controllers/looks.controller')

router.get('/', getAllMyLooks)
router.post('/', createLook)
router.get('/:id', getLookById)
router.put('/:id', updateLookById)
router.delete('/:id', deleteLookById)
router.post('/:id/addCloth', addsClothToMyLook)
router.delete('/:id/removeCloth', removeClothToMyLook)

module.exports = router
