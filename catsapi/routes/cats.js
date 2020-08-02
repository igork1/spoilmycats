const express = require('express');

const {
  getCats,
  getCat,
  createCat,
  updateCat,
  deleteCat,
} = require('../controllers/cats');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getCats)
  .post(protect, createCat);
router
  .route('/:id')
  .get(protect, getCat)
  .put(protect, updateCat)
  .delete(protect, deleteCat);

module.exports = router;
