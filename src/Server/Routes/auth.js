const router= require('express').Router();
const user= require('../Models/user.js');
const {registerValidation,loginValidation}=require('../Validations/validations.js');
const bcrypt= require('bcrypt');


router.post('/register', async (req,res)=>{
    res.status(200).send("hello")
    // const {error}= registerValidation(req.body)
    // if(error) return res.status(400).send(error.details[0].message)

    // const userExists =await user.findOne({username:req.body.username})
    // if(userExists) return res.status(400).send("username already taken")

    // const emailExist= await user.findOne({email: req.body.email})
    // if(emailExist) return(res.status(400).send("This email is already taken"))

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword= await bcrypt.hash(req.body.password, salt);

    // const newUser = new user({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: hashedPassword,
    // })

    // try{
    //     const savedUser =newUser.save()
    //     res.json(savedUser)
    // }catch(err){
    //     res.status(400).send(err);
    // }
})
module.exports=router; 