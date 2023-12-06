const postDb = require("../models/post");
exports.savePost = async (req, res, next) => {
  const id = req.body.Id;
  const desc = req.body.Desc;
  const link = req.body.Link;
  const result = await postDb.addPost(link, desc, id);
  res.send(result);
};
