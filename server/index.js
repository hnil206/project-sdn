const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const route =require('./routes')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

route(app);


app.listen(3001, () => {
    console.log("server is running")
});