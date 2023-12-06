const express = require("express");
const getAllCommentsController = require("../controllers/allComments");
const router = express.Router();
router.get("/getAllComments", getAllCommentsController.getAllComments);
module.exports = router;
