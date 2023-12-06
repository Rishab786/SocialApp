const postDb = require("../models/post");
exports.getAllPost = async (req, res, next) => {
  const result = await postDb.getAllPost();
  res.send(result);
};
