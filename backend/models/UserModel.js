const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const uploads=mongoose.model("uploads", uploadSchema);
module.exports = uploads;