const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    descripton: String,
    hashtags: String,
    link: String,
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Post', PostSchema);
