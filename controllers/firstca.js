//const ErrorResponse = require('../config/util/errorResponse');
const Firstca = require('../models/firstca');
//add firstca and update
exports.create = async (req, res, next) => {
    //check if student with the registration,subject and session number exit in first term exam score tabele
    try{


        const  {regnumber, subject, session, term} = req.body;
        const filter = {regnumber, subject, session, term};
        const update = req.body;
        let doc = await Firstca.findOneAndUpdate(filter, update,{
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
    const firstcas = await Firstca.find()
        .skip((page - 1) * ItemsPerPge)
        .limit(ItemsPerPge);
   const totalFirstcas = await Firstca.countDocuments();
    res.json({ firstcas, totalFirstcas});
    

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
exports.deleteFirstcas =async (req, res, next) => {
    console.log(req.params);
    try{
        
        const firstcas = await Firstca.findOneAndDelete({ _id: req.params.firstcaId });
       
        if (firstcas) {
            res.json({ firstcas });
        } else {
            res.json({ message: `the Firstca with the id of ${req.params.firstcaId} does not exits` });
        }
    }
    catch(err)
    {
       
        next(err);
    }
};

