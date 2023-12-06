const commentsDb = require("../models/comments");
exports.SaveComment = async (req, res, next) => {
  const comment = req.body.Comment;
  const id = req.body.Id;
  const result = await commentsDb.addComment(comment, id);
  res.send(result);
};
