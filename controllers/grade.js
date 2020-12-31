//const ErrorResponse = require('../config/util/errorResponse');
const Grade= require('../models/grade');
//add firstca and update
exports.create = async (req, res, next) => {
    //check if student with the registration,subject and session number exit in first term exam score tabele
    try{


        const  {minscore, maxscore, grade} = req.body;
        const filter = {minscore, maxscore, grade};
        const update = req.body;
        let doc = await Grade.findOneAndUpdate(filter, update,{
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
 * Get all the firstcas
 * Paginate the firstcas
 * Get the total number of firstcas
 */
exports.read = async (req, res, next) =>{
    //search for scores by registration, session and term
    

    const page = req.query.page;
    const ItemsPerPge = 10;
    const grade = await Grade.find()
        .skip((page - 1) * ItemsPerPge)
        .limit(ItemsPerPge);
   const totalGrade = await Grade.countDocuments();
    res.json({ grade, totalGrade});
    

};
/**
 * reaad firstca for inividual
 **/
exports.readone = async (req, res, next)=>{
    //search for firstca base on regnuumber, session and term
    const  {regnumber, session, term} = req.body;
    const filter = {regnumber, session, term};
    firstcas = await Firstca.find(filter);
    console.log(firstcas);
    res.json({firstcas});
}
/**
 * delete the firstca
 */
exports.deleteGrade =async (req, res, next) => {
    console.log(req.params);
    try{
        
        const grade = await Grade.findOneAndDelete({ _id: req.params.gradeId });
       
        if (grade) {
            res.json({ grade });
        } else {
            res.json({ message: `the Grade with the id of ${req.params.gradeId} does not exits` });
        }
    }
    catch(err)
    {
       
        next(err);
    }
};

