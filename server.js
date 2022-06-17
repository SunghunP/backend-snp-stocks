// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// App listener
app.listen(PORT, (res, req) => {
  console.log(`Listening on PORT: ${PORT}`)
});