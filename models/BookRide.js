const mongoose = require('mongoose')

const BookRideSchema = new mongoose.Schema({
    pickUpLocation: {type: String, required: true},
    dropOfLocation: {type: String, required: true},
    passengersCount: {type: Number, required: true},
    passengersNames: {type: String, required: true},
    contactNumber: {type: Number, required: true},
    pickUpDate: {type: String, required: true},
    pickUpTime: {type: String, required: true},
    status: {type: String, default: "pending"}
})

module.exports = mongoose.model("services", BookRideSchema)