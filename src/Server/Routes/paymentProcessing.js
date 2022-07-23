const router= require('express').Router();
const { randomUUID } = require("crypto");
BigInt.prototype.toJSON = function(){return this.toString();}
const dotEnv= require("dotenv")
dotEnv.config()

const {Client, Environment}= require("square")

const client = new Client({
    accessToken: process.env.API__KEY,
    environment: Environment.Sandbox,
    });
  


router.post("/v2/payments",  async (req,res)=>{

    const {result} = await client.paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: 'cnon:card-nonce-ok',
      amountMoney: {
        amount: 100,
        currency: 'USD'
    }
  })
      console.log(result)
      res.status(200).json(result);

})

module.exports= router