const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3001;
const app = express();
const route = require('./routes')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee")
.then(()=> console.log('MongoDB connected...'))
.catch((err) => console.log(err));



route(app);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});