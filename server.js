const express = require("express");
const mongoose = require("mongoose");
// const cors= require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Create Express app
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Create mongoose database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});