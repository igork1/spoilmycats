const express = require('express');

const { createCat, updateCat, deleteCat } = require('../controllers/cats');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/').post(protect, createCat);
router
  .route('/:id')
  .put(protect, updateCat)
  .delete(protect, deleteCat);

module.exports = router;
