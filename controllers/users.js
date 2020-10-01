const User = require('../models/user');
module.exports ={
    signup: async(req, res, next) =>
    {
        const {email, password, firstname, lastname, mobilenumber, examtype, state} = req.value.body;
      
        //check if thre is a user with the same email
        const foundUser = await User.findOne({email});
        if(foundUser)
        {
           return res.status(403).json({error: 'Email is already in use',status:false});
        }
        //create new user
        const newuser = new User({email,password, firstname, lastname, mobilenumber, examtype, state});
       await newuser.save();
       //respond with token
       const token = newuser.getSignedJWToken();
       res.json({status:true,token,user:foundUser});
      
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