const mongoose = require("mongoose");

const closetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

const closetModel = mongoose.model("closet", closetSchema);
module.exports = closetModel;