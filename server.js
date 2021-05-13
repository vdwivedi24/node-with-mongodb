const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require('./routes/bootcamps');
const configdb =  require('./config/db');
const logger = require('./middleware/logger');
const morgan =  require('morgan');
dotenv.config({ path:'./config/config.env'});
const colors =  require('colors');

configdb();
const app = express();

app.use(express.json());
// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'));
// }
// app.use(logger);

app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;

const  server = app.listen(5000, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on part ${PORT}`.yellow.bold));

//Handle unhandled rejections 

process.on('unhandledRejection',(error, promise)=>{
    console.log(`Error: ${error.message}`.red);
    server.close(()=>{
        process.exit(1);
    });
});