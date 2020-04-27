const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  clothes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cloth",
    },
  ],
});

const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;
