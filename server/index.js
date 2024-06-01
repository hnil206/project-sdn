const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3001;
const app = express();
const route = require('./routes');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(uploadDir));

mongoose.connect("mongodb://localhost:27017/employee")
.then(()=> console.log('MongoDB connected...'))
.catch((err) => console.log(err));



route(app);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});