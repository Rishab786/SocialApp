const db = require("../utils/db");
async function saveComment(comment, id) {
  const result = await db.execute(
    "INSERT INTO comments (postid,comment) VALUES (?, ?)",
    [id, comment]
  );
}
async function getComments() {
  const result = await db.execute("SELECT * FROM `comments`");
  return result[0];
}

module.exports = {
  addComment: saveComment,
  getAllComments: getComments,
};
