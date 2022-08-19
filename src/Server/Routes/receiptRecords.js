const router= require('express').Router();
const receipt= require('../Models/receipt.js');
const {receiptValidations}=require('../Validations/validations.js')

router.post("/receipts", async (req,res)=>{
    const {error} = receiptValidations(req.body)
    if(error) return res.status(400).send()

    const newReceipt = new receipt({
        username: req.body.username,
        currency: req.body.currency,
        products: req.body.products,
    })
    try{
        const savedReceipt= newReceipt.save()
        res.json(savedReceipt)
    }catch(err){
        return res.status(400).send(err)
    }

})

module.exports= router