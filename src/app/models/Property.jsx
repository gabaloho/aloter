// models/Property.js
const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
  title: String,
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  price: Number,
  type: String, // residential/commercial/land
  status: String, // available/sold/ongoing
  features: [String],
  images: [String],
  description: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Property', PropertySchema)