const express = require("express");
const addPostController = require("../controllers/addPost");
const router = express.Router();
router.post("/addPost", addPostController.savePost);
module.exports = router;
