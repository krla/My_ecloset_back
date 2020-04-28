const mongoose = require('mongoose')

const lookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  clothes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cloth'
    }
  ],
  user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
})

const lookModel = mongoose.model('look', lookSchema)
module.exports = lookModel
