const ErrorResponse = require('../config/util/errorResponse');
const User = require('../models/user');
module.exports ={
    signup: async(req, res, next) =>
    {
        try{
        const {email, password,dob,pob,classs,role,firstname,address,fatherfirstname,motherfirstname,fatherlastname,fatherphone,motherphone,parentemail,motherlastname,formerschool,middlename, lastname, regnumber, sex, state} = req.value.body;
        //check if thre is a user with the same email
        const foundUser = await User.findOne({email});
        if(foundUser)
        {
           return res.status(403).json({error: 'Email is already in use',status:false});
        }
        //create new user
        const newuser = new User({email, password,dob,pob,classs, role,firstname,address,fatherfirstname,motherfirstname,fatherlastname,fatherphone,motherphone,parentemail,motherlastname,formerschool,middlename, lastname, regnumber, sex, state});
       await newuser.save();
       //respond with token
       const token = newuser.getSignedJWToken();
       res.json({status:true,token,user:newuser});
    }
    catch(err){
        next(err);

    }
      
    },
    signin: async(req, res, next) =>
    {
        const {email, password} = req.value.body;
        //validate user name and password
        if(!email || !password)
        {
            return res.status(403).json({error: 'Please provide email and password'});

        }
        //Check for user
        const user = await User.findOne({email});

        if(!user)
        {
            return res.status(403).json({error: 'Invalid credentials'});

        }
        //check is password matches
    
       const isMatch =await  user.isValidPassword(password);
      
       if(!isMatch)
       {
        console.log('checklog',isMatch);
        return res.status(403).json({error: 'Invalid credentials'});

       };
        //respond with token
       sendTokenResponse (user, 200, res);
      
    },
    updateuser: async(req, res, next) => {
     
        try{
            const user = await User.findByIdAndUpdate(req.params.id , req.body,{
                new: true,
                runValidators: true
            });
            if(!user){
                //return json  false response
                return res.status(403).json({error: 'Invalid credentials'});
            }
            //return json true response
            res.json({status:true,user});
        
        }
        catch(err)
        {
            //next(err);
            res.json({error:err});
        
        }
       
    },
    deleteuser: async(req, res, next) => {
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            if(!user){
                //return json  false response
            }
            //return json true response

        }
        catch(err)
        {

        }
       
    },
    secret: async(req, res, next) =>
    {
        res.json({user:'created',data:req.user});
        console.log('UserController.secret() called');
      
    }
}
//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) =>
{
     const token = user.getSignedJWToken();
     const options = {
         expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
         httpOnly: true,
         //secure: true
     }
       res.status(statusCode)
       .cookie('token', token, options)
       .json({status:true,token,user});

}