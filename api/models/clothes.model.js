const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  img_url: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  cloth_type: {
    type: String,
    enum: ['others'],
    required: true
  },
  season: {
    type: String,
    enum: ['others'],
    required: true
  }
});

const clothModel = mongoose.model('cloth', clothSchema)
module.exports = clothModel
