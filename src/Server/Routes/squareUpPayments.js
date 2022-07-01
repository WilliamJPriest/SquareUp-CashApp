const router= require('express').Router();
const receipt= require('../Models/receipt.js');
const {receiptValidation}=require('../Validations/validation.js')

router("/payments", async (req,res)=>{
    const {error} = receiptValidation(req.body)
    if(error) return res.status(400).send()
})