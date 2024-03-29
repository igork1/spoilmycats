const Cat = require('../models/Cat');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get user's cats
// @route   GET /api/v1/cats
// @access  private
exports.getCats = asyncHandler(async (req, res, next) => {
  const userID = req.user.id;

  const cats = await Cat.find({ user: userID });

  res.status(200).json({ success: true, count: cats.length, data: cats });
});

// @desc    Get cat
// @route   Get /catsapi/v1/cats/:id
// @access  Private
exports.getCat = asyncHandler(async (req, res, next) => {
  const cat = await Cat.findById(req.params.id);

  if (!cat) {
    return next(
      new ErrorResponse(`Cat not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure the user is the cat's owner
  if (cat.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this cat`,
        403
      )
    );
  }

  res.status(200).json({
    success: true,
    data: cat,
  });
});

// @desc    Create new cat
// @route   POST /catsapi/v1/cats
// @access  Private
exports.createCat = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const cat = await Cat.create(req.body);

  res.status(201).json({
    success: true,
    data: cat,
  });
});

// @desc    Update cat
// @route   PUT /catsapi/v1/cats/:id
// @access  Private
exports.updateCat = asyncHandler(async (req, res, next) => {
  let cat = await Cat.findById(req.params.id);

  if (!cat) {
    return next(
      new ErrorResponse(`Cat not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure the user is the cat's owner
  if (cat.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this cat`,
        403
      )
    );
  }

  cat = await Cat.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: cat });
});

// @desc    Delete cat
// @route   DELETE /catsapi/v1/cats/:id
// @access  Private
exports.deleteCat = asyncHandler(async (req, res, next) => {
  const cat = await Cat.findById(req.params.id);

  if (!cat) {
    return next(
      new ErrorResponse(`No cat with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is cat owner
  if (cat.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete cat ${cat._id}`,
        401
      )
    );
  }

  await cat.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
