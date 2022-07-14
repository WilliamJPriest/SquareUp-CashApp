const router= require('express').Router();
const { randomUUID } = require("crypto");

router.post("/v2/payments",  async (req,res)=>{
  try {
    const response = await client.paymentsApi.createPayment({
      sourceId: req.body.sourceId,
      idempotencyKey: randomUUID(),
      amountMoney: {
        amount: 100,
        currency: 'USD'
      }
    });
  
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }
  

})

module.exports= router