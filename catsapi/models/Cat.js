const mongoose = require('mongoose');
const slugify = require('slugify');

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  slug: String,
  feedingTime: {
    type: Date,
  },
  skills: {
    type: Array,
    of: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Create cat slug from the name
CatSchema.pre('save', function(next) {
  console.log(`Slugify ran ${this.name}`);
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Cat', CatSchema);
