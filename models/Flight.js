const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: [],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: () => {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth();
      let day = currentDate.getDay();
      return new Date(year + 1, month, day);
    },
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
