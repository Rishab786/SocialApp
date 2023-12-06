const express = require("express");
const getAllPostController = require("../controllers/allPost");
const router = express.Router();
router.get("/getAllPost", getAllPostController.getAllPost);
module.exports = router;
