//const ErrorResponse = require('../config/util/errorResponse');
const Secondca = require('../models/secondca');
//addsecondca and update
exports.create = async (req, res, next) => {
    //check if student with the registration,subject and session number exit in first term exam score tabele
    try{


        const  {regnumber, subject, session, term} = req.body;
        const filter = {regnumber, subject, session, term};
        const update = req.body;
        let doc = await Secondca.findOneAndUpdate(filter, update,{
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
 * Get all the secondcas
 * Paginate the secondcas
 * Get the total number of secondcas
 */
exports.read = async (req, res, next) =>{
    //search for scores by registration, session and term
    

    const page = req.query.page;
    const ItemsPerPge = 10;
    const secondcas = await Secondca.find()
        .skip((page - 1) * ItemsPerPge)
        .limit(ItemsPerPge);
   const totalSecondcas = await Secondca.countDocuments();
    res.json({ secondcas, totalSecondcas});
    

};
/**
 * reaad firstca for inividual
 **/
exports.readone = async (req, res, next)=>{
    //search for firstca base on regnuumber, session and term
    const  {regnumber, session, term} = req.body;
    const filter = {regnumber, session, term};
    secondcas = await Secondca.find(filter);
    console.log(secondcas);
    res.json({secondcas});
}
/**
 * delete the firstca
 */
exports.deleteSecondcas =async (req, res, next) => {
    console.log(req.params);
    try{
        
        const secondcas = await Secondca.findOneAndDelete({ _id: req.params.secondcaId });
       
        if (secondcas) {
            res.json({ secondcas });
        } else {
            res.json({ message: `the Secondca with the id of ${req.params.secondcaId} does not exits` });
        }
    }
    catch(err)
    {
       
        next(err);
    }
};

