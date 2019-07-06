const Post = require('../models/Post');

module.exports = {
  async newLike(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();
    req.io.emit('like', post);

    return res.json(post);
  },
  async newDislike(req, res) {
    const post = await Post.findById(req.params.id);

    post.dislikes += 1;

    await post.save();
    req.io.emit('dislike', post);

    return res.json(post);
  },
};
