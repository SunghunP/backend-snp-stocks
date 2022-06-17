require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE_URL= process.env.DATABASE_URL;

// DB connection
mongoose.connect(DATABASE_URL);
const db = mongoose.connection
  .on("connected", () => console.log("DB Connected"))
  .on("disconnected", () => console.log("DB Disconnected"))
  .on("error", (err) => console.log(err));

module.exports = db;