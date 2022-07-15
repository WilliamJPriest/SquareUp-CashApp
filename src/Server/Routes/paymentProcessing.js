const router= require('express').Router();
const { randomUUID } = require("crypto");
BigInt.prototype,toJSON = function(){return this.toString();}


router.post("v2/payments",  async (req,res)=>{
  try {
    const {result} = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        amount: 100,
        currency: 'USD'
      }
    });
      console.log(result)
      res.status(200).json(result);
  }catch(error) {
      res.status(500).send("error");
  }
  

})

module.exports= router