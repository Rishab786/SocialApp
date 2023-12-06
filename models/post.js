const db = require("../utils/db");
async function savePost(link, description, id) {
  const result = await db.execute(
    "INSERT INTO posts (url,description,postid) VALUES (?, ?,?)",
    [link, description, id]
  );
}
async function getPosts() {
  const result = await db.execute("SELECT * FROM `posts`");
  return result[0];
}

module.exports = {
  addPost: savePost,
  getAllPost: getPosts,
};
