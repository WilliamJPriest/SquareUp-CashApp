const mongoose =require('mongoose')

const receiptSchema=new mongoose.Schema({
    username:{ 
       
        max:255        
    },
    currency:{
        type:String,
        required:true,
    },
    products:{
        type: String,
        required:true,
        min: 6,
    }
})

module.exports= mongoose.model("receipts",receiptSchema)