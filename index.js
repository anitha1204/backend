
const express = require('express');
const connect = require('./common/connection');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");

const app = express();

connect();

app.use(cors());
app.use(express.json());
const PORT = 5000;

app.use(userRoutes);


app.listen(PORT, () => {
    console.log("server running on:",5000);
  });