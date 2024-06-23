import Joi from "joi"

const userSignupSchema = Joi.object({
    Email: Joi.string().email().required(),
    Name: Joi.string().required(),
    Age: Joi.number().required().min(0).max(100),
    City: Joi.string().max(15).required(),
    ZipCode: Joi.string().max(7).required(),
    Password: Joi.string().required().min(8),
    Deleted: Joi.boolean()
});

const userSignupSchema2 = Joi.object({
    Email: Joi.string().email(),
    Name: Joi.string(),
    Age: Joi.number().min(0).max(100),
    City: Joi.string().max(15),
    ZipCode: Joi.string().max(7),
    Password: Joi.string().min(8),
    Deleted: Joi.boolean()
});

export const validate = (req,res,next)=>{
    const { error, value } = userSignupSchema.validate(req.body, {
        abortEarly: false,
    });

    if(error){
        return res.status(400).json({error: error.details.map(err => err.message)})
        console.log(error);
    }
    next();
}

export const validate2 = (req,res,next)=>{
    const { error, value } = userSignupSchema2.validate(req.body, {
        abortEarly: false,
    });

    if(error){
        return res.status(400).json({error: error.details.map(err => err.message)})
        console.log(error);
    }
    next();
}
