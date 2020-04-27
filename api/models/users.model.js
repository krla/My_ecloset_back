const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      },
    },
    unique: [true, "This is email is registered"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    enum: ["hombre", "mujer"],
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  category_looks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryLook",
    },
  ],
  closets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "closet",
    },
  ],
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
