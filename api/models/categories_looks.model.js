const mongoose = require("mongoose");

const categoryLookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  looks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "look",
    },
  ],
});

const categoryLookModel = mongoose.model("categoryLook", categoryLookSchema);
module.exports = categoryLookModel;