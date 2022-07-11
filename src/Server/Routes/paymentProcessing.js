const router= require('express').Router();
// const { randomUUID } = require("crypto");

router.post("/v2/payments",  async (req,res)=>{
  res.send("hi")

})

module.exports= router