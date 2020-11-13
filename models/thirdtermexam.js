const mongoose = require('mongoose');
//create schema
const Schema = mongoose.Schema;
const thirdtermSchema = new Schema ({
    score: 
    {
        type:Number,
        required:[true, 'Please Enter score'],
        maxlength: 100
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
    subjectcode:
    {
        type:Number,
        required:[true, 'Please Enter Subjectcode'],
    },
    regnumber:
    {
        type:String,
        required:[true, 'Please Enter Registration Number'],
    },
    
});

//create a model
const Thirdterm = mongoose.model('secondterm', thirdtermSchema);

//export the model
module.exports = Thirdterm;