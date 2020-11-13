const jwt = require('jsonwebtoken');
const User = require('../models/user');
//Protect routes
exports.protect = async (req, res, next) => {
   
        let token;
        if(  req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        {token = req.headers.authorization.split(' ')[1];}
        //elseif(req.cookies.token)
        //{
            //token = req.cookies.token;

        //}
        if(!token)
        {return res.status(403).json({error: 'Unauthorise User'});}
       
    try
    { 
         //Verify token
         const decoded = jwt.verify(token, 'jjbg759kjr09566');
         //console.log(decoded);
         req.user = await User.findById(decoded.id);
         next();

    }
    catch(error)
    {
        return res.status(403).json({error: 'Unauthorise Users'});
        
    }
}
//Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role))
        {
            return res.status(403).json({error: `User role ${req.user.role} is Unauthorise to commit this action`});

        }
        next()
    }
}