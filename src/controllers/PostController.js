const Post = require('../models/Post');

module.exports = {
  async loadPosts(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  },

  async savePost(req, res) {
    const {
      title, author, descripton, hashtags, link,
    } = req.body;

    const post = await Post.create({
      title,
      author,
      descripton,
      hashtags,
      link,
    });
    return res.json(post);
  },
};
