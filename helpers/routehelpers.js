const Joi = require('joi');
module.exports = {
    validateBody: (schema)=>
    {
        return (req,res,next) => {
           // console.log(schema);
            //console.log(req.body);
            const result= schema.validate(req.body);
           
            if(result.error)
            {
                return res.status(400).json(result.error.details[0].message);
            }
            //re.value.body instead of req.body
            if(!req.value)
            {
                req.value ={};
            }
            req.value['body'] = result.value;
            next();

        }

    },
    schemas: {
        authSchema: Joi.object({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            regnumber: Joi.string().required(),
            sex: Joi.string().required(),
            dob: Joi.string().required(),
            pob: Joi.string().required(),
            classs: Joi.string().required(),
            role: Joi.string().required(),
            address: Joi.string().required(),
            formerschool: Joi.string().required(),
            
            //mobilenumber: Joi.number().integer().min(00000000000).max(99999999999).required(),
            state: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            fatherfirstname: Joi.string().required(),
            motherfirstname: Joi.string().required(),
            fatherlastname: Joi.string().required(),
            motherlastname: Joi.string().required(),
            motherphone: Joi.number().integer().min(00000000000).max(99999999999).required(),
            fatherphone: Joi.number().integer().min(00000000000).max(99999999999).required(),
            parentemail: Joi.string().email().required(),
        })

    },
    loginschemas: {
        authSchema: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })

    }
}






