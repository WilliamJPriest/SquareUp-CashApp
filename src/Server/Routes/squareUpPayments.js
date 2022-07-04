const router= require('express').Router();
const receipt= require('../Models/receipt.js');
const {receiptValidations}=require('../Validations/validations.js')

router.post("/payments", async (req,res)=>{
    const {error} = receiptValidations(req.body)
    if(error) return res.status(400).send()
})

module.exports= router