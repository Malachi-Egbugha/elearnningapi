const mongoose = require('mongoose');
//create schema
const Schema = mongoose.Schema;
const secondcaSchema = new Schema ({
    score: 
    {
        type:Number,
        required:[true, 'Please Enter score'],
        maxlength: 20
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
const Secondca = mongoose.model('secondca', secondcaSchema);

//export the model
module.exports = Secondca;
