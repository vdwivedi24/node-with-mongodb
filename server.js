const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require('./routes/bootcamps');
// const logger = require('./middleware/logger');
const morgan =  require('morgan');
dotenv.config({
    path:'./config/config.env'
});

const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// app.use(logger);

app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(5000, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on part ${PORT}`));