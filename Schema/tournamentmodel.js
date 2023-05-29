const mongoose = require("mongoose");

const tournamentSchema = mongoose.Schema({
  gamename: {
    type: String,
    required: true,
    trim: true,
  },
  startdate: {
    type: String,
    required: true,
    trim: true,
  },
  enddate: {
    type: String,
    required: true,
    trim: true,
  },
  gameStatus: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("tournament", tournamentSchema);
