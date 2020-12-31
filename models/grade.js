const mongoose = require('mongoose');
//create schema
const Schema = mongoose.Schema;
const gradeSchema = new Schema ({
    minscore: 
    {
        type:Number,
        required:[true, 'Please Minimum Score'],
        maxlength: 100,
        minlength: 0
    },
    maxscore: 
    {
        type:Number,
        required:[true, 'Please Minimum Score'],
        maxlength: 100,
        minlength: 0
    },
    grade:
    {
        type:String,
        required:[true, 'Please Enter Grade'],
    }
    
    
});

//create a model
const Grade = mongoose.model('grade', gradeSchema);

//export the model
module.exports = Grade;
