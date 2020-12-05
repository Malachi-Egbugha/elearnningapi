const mongoose = require('mongoose');
//create schema
const Schema = mongoose.Schema;
const examSchema = new Schema ({
    score: 
    {
        type:Number,
        required:[true, 'Please Enter score'],
        maxlength: 100
    },
    term:
    {
        type:Number,
        required:[true, 'Please Enter Term'],
    },
    session:
    {
        type:String,
        required:[true, 'Please Enter session'],
    },
    subject:
    {
        type:String,
        required:[true, 'Please Enter Subject'],
    },
    category:
    {
        type:String,
        required:[true, 'Please Enter Subject Code'],
    },
    regnumber:
    {
        type:String,
        required:[true, 'Please Enter Registration Number'],
    },
    
});

//create a model
const Exam = mongoose.model('exam', examSchema);

//export the model
module.exports = Exam;
