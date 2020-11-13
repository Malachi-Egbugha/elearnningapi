//const ErrorResponse = require('../config/util/errorResponse');
const Exam = require('../models/exam');
exports.create = async (req, res, next) => {
    //check if student with the registration,subject and session number exit in first term exam score tabele
    try{


        const  {regnumber, subject, session, term} = req.body;
        
        const filter = {regnumber, subject, session, term};
        const update = req.body;
        let doc = await Exam.findOneAndUpdate(filter, update,{
            new: true,
            upsert:true
        });
        console.log(doc);
        if(doc){
           return res.json({doc});
        }
        else{
            return res.json({status: false});
        }

    }
    catch(err)
    {
        next(err);
    }
  
   

};
exports.read = async (req, res, next) =>{
    //search for scores by registration, session and term
    //replicate exam in test
    

}