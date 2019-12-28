const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const app = express();
const resetauth = require("./routes/resetAuth");
const auth = require("./routes/auth");
const user = require("./routes/user");
const resetPassword = require("./routes/resetPassword");
// const resetTest = require("./routes/ResetTest");

// Body Parser Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// DB Config
const db = config.get("mongoURI");

// cors
app.use(cors());

// Routes
app.use("/user", user);
app.use("/resetauth", resetauth);
app.use("/auth", auth);
app.use("/reset", resetPassword);

// Test Route
// app.use("/resettest", resetTest);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
