const commentsDb = require("../models/comments");
exports.getAllComments = async (req, res, next) => {
  const result = await commentsDb.getAllComments();
  res.send(result);
};
