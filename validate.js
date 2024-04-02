const joi=require('joi')
const knex = require("./db/knex");

const authenticator= joi.object({
    id:joi.number().required(),
    name:joi.string().required(),
    email:joi.string().email().lowercase().required(),
    phone_number:joi.number().required(),
    is_active:joi.boolean(),

});

module.exports=authenticator
