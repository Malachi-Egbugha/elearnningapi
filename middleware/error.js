const ErrorResponse = require("../config/util/errorResponse");
const errorHandler = (err, req,res,next) => {
    let error = {...err};
    error.message = err.message;
//Log to console for dev
console.log(err.stack);
//Mongoose bad objectId;
if(err.name === 'CastError'){
    const message = 'not found';
    error = new ErrorResponse(message, 404);

}
res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
});
};
module.exports = errorHandler;