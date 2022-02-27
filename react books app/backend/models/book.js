const mongoose = require('mongoose');;

const BookSchema = new mongoose.Schema(
  {
    bookname: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    photos: [String],
    price: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookStore", BookSchema);


