const mongoose= require ("mongoose")

const userSchema= new mongoose.Schema({
    username:{ 
        type: String,
        required:true,
        min: 6,
        max:255        
    },
    email: {
        type: String,
        required:true,
        min:6,
        max:255
    },
    password: {
        type: String,
        required:true,
        min:6,
        max:255
    },
    country:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    address:{
        type: String,
        required:true,
        min:6,
        max:255
    },
    fullname:{
        type: String,
        required:true,
        min:6,
        max:255
    },
})

module.exports = mongoose.model("users",userSchema);