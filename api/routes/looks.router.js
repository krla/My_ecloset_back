const router = require('express').Router()

const {
  getAllMyLooks,
  createLook,
  getLookById,
  updateLookById,
  deleteLookById
} = require('../controllers/looks.controller')

router.get('/', getAllMyLooks)
router.post('/', createLook)
router.get('/:id', getLookById)
router.put('/:id', updateLookById)
router.delete('/:id', deleteLookById)

module.exports = router
