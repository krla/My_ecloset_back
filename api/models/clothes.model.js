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
    enum: ['blusas', 'camisetas', 'chaqueta', 'abrigo', 'rebecas', 'jersey', 'pullover', 'vaqueros', 'pantalon', 'falda', 'vestido', 'short', 'zapatos', 'camisa', 'polo', 'sombrero', 'otros'],
    required: true
  },
  season: {
    type: String,
    enum: ['primavera-verano', 'otoño-invierno', 'todas'],
    default: 'todas',
    required: true
  }
})

const clothModel = mongoose.model('cloth', clothSchema)
module.exports = clothModel
