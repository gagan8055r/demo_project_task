const express=require('express')
const {query, validationResult}=require('express-validator')
const app=express()
// const yup=require('yup')
const  port=3000
app.use(express.json())

app.get('/home',query('person').notEmpty().escape(),(req,res)=>{

    const result=validationResult(req)
    if(result.isEmpty()) {
       return  res.send(`hello,${req.query.person}`)
    }
    res.send({ errors: result.array() });
})

app.listen(port,()=>{
    console.log("listening on port number 3000...")
})





