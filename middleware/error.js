const ErrroResponse  =  require('../util/errorResponse');


const errorHandler = (err, req, res, next) =>{
let error = {...err}
error.message  = err.message;
//Mongoose bad objectid
if(err.name === 'CastError'){
    const  message = `Bootcamp not found with id of ${err.value}`
    error = new ErrroResponse(message, 404);
}

///Mongooose duplicate keys
if(error.code  === 11000){
    const message =  'Duplicate field value entered';
    error = new ErrroResponse(message, 400);
}

//Mongoose validation error

if(err.name === 'ValidationError'){
    const message = Object.values(err.errors).map(val => val.message);
    error =  new ErrroResponse(message,400);
}
res.status(error.statusCode ||500).json({success: false,error: error.message || 'Server error'});
}  
module.exports = errorHandler;