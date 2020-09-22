const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connection established successfully");
});

const userRouter = require("./routes/user");
const testRouter = require("./routes/test");
app.use("/user", userRouter);
app.use("/test", testRouter);

app.listen(port, console.log(`listing at port ${port}`));
