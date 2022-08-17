const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    productName:{
        type: String,
        max:255,        
        required:true,
    },
    productPrice:{
        type: String,
        max:255,        
        required:true,

    },
    productCurrency:{
        type: String,
        max:255,        
        required:true,

    },
    productImage:{
        type: String,
        max:255,        
        required:true,

    }
})

module.exports= mongoose.model("products",productSchema)