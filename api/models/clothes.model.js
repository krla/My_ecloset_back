const mongoose = require('mongoose')

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
    enum: ['Abrigos', 'Blusas', 'Camisas', 'Camisetas', 'Chaquetas', 'Faldas', 'Jerseys', 'Pantalones', 'Polos', 'Pullovers', 'Rebecas', 'Shorts', 'Sombreros', 'Vaqueros', 'Vestidos', 'Zapatos', 'Otros'],
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
