const express = require("express");
const addCommentController = require("../controllers/addComment");
const router = express.Router();
router.post("/addComment", addCommentController.SaveComment);
module.exports = router;
