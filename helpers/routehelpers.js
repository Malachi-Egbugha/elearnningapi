const Joi = require('joi');
module.exports = {
    validateBody: (schema)=>
    {
        return (req,res,next) => {
            console.log(schema);
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
            examtype: Joi.string().required(),
            mobilenumber: Joi.number().integer().min(00000000000).max(99999999999).required(),
            state: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })

    },
    loginschemas: {
        authSchema: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })

    }
}



