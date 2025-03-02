const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
