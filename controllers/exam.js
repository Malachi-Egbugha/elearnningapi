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
        .limit(ItemsPerPge);
   const totalExams = await Exam.countDocuments();
    res.json({ exams, totalExams});
    

};
/**
 * reaad exam for inividual
 **/
exports.readone = async (req, res, next)=>{
    //search for exams base on regnuumber, session and term
    const  {regnumber, session, term} = req.body;
    const filter = {regnumber, session, term};
    exams = await Exam.find(filter);
    res.json({exams});
}
/**
 * delete the exam
 */
exports.deleteExams =async (req, res, next) => {
    console.log(req.params);
    try{
        
        const exams = await Exam.findOneAndDelete({ _id: req.params.examId });
       
        if (exams) {
            res.json({ exams });
        } else {
            res.json({ message: `the exam with the id of ${req.params.examId} does not exits` });
        }
    }
    catch(err)
    {
       
        next(err);
    }
};

