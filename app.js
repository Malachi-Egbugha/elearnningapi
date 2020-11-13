const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotev = require('dotenv').config();
const connectdb = require('./config/db');
const errorHandler = require('./middleware/error');
mongoose.Promise = global.Promise;
connectdb();
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(cors());
//Body Paser
app.use(express.json());
//Cookie Parser
app.use(cookieParser());
//Routes
app.use('/api',require('./routes/auth'));
app.use('/api',require('./routes/users'));
app.use('/exam',require('./routes/exam'));
app.use(errorHandler);
//Start the server
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listening at ${port}`);
