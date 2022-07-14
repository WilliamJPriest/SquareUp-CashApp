const jwt = require('jsonwebtoken')

module.exports =function (req,res,next){
    const token= req.header('Authorization');
    if (!token) return res.status(401).send("Access Denied")
    try{
        const verifiedToken= (token, process.env.Api__Key)
        req.user =verifiedToken
        next()
    }catch{
        res.status(400).send("token error")
    }
}