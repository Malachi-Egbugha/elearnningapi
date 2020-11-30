//const ErrorResponse = require('../config/util/errorResponse');
const Exam = require('../models/exam');
//add exam and update
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
/**
 * Get all the exams
 * Paginate the exams
 * Get the total number of exams
 */
exports.read = async (req, res, next) =>{
    //search for scores by registration, session and term
    //replicate exam in test

    const page = req.query.page;
    const ItemsPerPge = 10;
    const exams = await Exam.find()
        .skip((page - 1) * ItemsPerPge)
        .limit(ItemsPerPge)
    const totalExams = await Exams.countDocuments();
    res.json({ exams, totalExams });
    

}