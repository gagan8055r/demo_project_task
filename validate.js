const joi=require('joi')
const knex = require("./db/knex");
const yup=require('yup')
const authenticator= joi.object({
    id:joi.number().required(),
    name:joi.string().required(),
    email:joi.string().email().lowercase().required(),
    phone_number:joi.number().required(),
    is_active:joi.boolean(),

});

const user_info=yup.object().shape({
name:yup.string().required(),
email:yup.string().email().required(),
    password:yup.string().min(6).max(15).required()
});



// module.exports={authenticator,user_info}
module.exports = user_info