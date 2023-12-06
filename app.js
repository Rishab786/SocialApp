const express = require("express");
const cors = require("cors");
const app = express();
const getAllPostRouter = require("./routes/getAllPost");
const getCommentsRouter = require("./routes/getComments");
const addCommentRouter = require("./routes/addComment");
const addPostRouter = require("./routes/addPost");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.get("/getAllPost", getAllPostRouter);
app.get("/getAllComments", getCommentsRouter);
app.post("/addComment", addCommentRouter);
app.post("/addPost", addPostRouter);

app.listen(3000, () => {
  console.log("server started");
});
