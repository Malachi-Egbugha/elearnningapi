const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectdb = require('./config/db');
mongoose.Promise = global.Promise;
connectdb();
const app = express();

//Middlewares
app.use(morgan('dev'));
//Body Paser
app.use(express.json());
//Cookie Parser
app.use(cookieParser());
//Routes
app.use('/users',require('./routes/users'));
//Start the server
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listening at ${port}`);
