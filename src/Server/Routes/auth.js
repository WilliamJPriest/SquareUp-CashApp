const router=require('express').Router();
const user= require('../Models/user.js');
const {registerValidation,loginValidation}=require('../validation');

router.post("/register", async (req,res)=>{
    const {error}= registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const userExists =await User.findOne({username:req.body.username})
    if(userExists) return res.status(400).send("username already taken")

    const emailExist= await User.findOne({email: req.body.email})
    if(emailExist) return(res.status(400).send("This email is already taken"))

    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })

    try{
        const savedUser =newUser.save()
        res.json(savedUser)
    }catch(
        res.status.(400).send(err);
    )
})
module.exports = router