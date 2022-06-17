// Dependencies
require('dotenv').config();
require('./config/config');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// App listener
app.listen(PORT, (res, req) => {
  console.log(`Listening on PORT: ${PORT}`)
});