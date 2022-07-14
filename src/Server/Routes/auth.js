const router= require('express').Router();
const user= require('../Models/user.js');
const {registerValidation,loginValidation}=require('../Validations/validations.js');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleWare = require('../Validations/verifyToken')


router.post('/register', async (req,res)=>{
    const {error}= registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const userExists =await user.findOne({username:req.body.username})
    if(userExists) return res.status(400).send("username already taken")

    const emailExist= await user.findOne({email: req.body.email})
    if(emailExist) return(res.status(400).send("This email is already taken"))

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password, salt);

    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })

    try{
        const savedUser = await newUser.save()
        res.json(savedUser)
    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/login', async (req,res)=>{
        const {error}=loginValidation(req.body)
        if(error) return(res.status(400).send(error.details[0].message))
      
        const userDetails= await user.findOne({email: req.body.email}) 
        if(!userDetails) return(res.status(400).send("email doesn't exist"))
      
        const passwordValidation= await bcrypt.compare(req.body.password,userDetails.password)
        if(!passwordValidation) return(res.status(400).send("password is incorrect"))
        
              
        const userToken= jwt.sign({_id: userDetails._id, },process.env.HIDDEN__TOKEN);
        res.json({auth: true, token: userToken,});
      
      
      })

router.get('/',  async (req,res)=>{
try{ 
    const token = req.header('x-auth-token');

    const user = await user.findById(jwy.decode(token))
    return res.status(200).json({
        success: true,
        data: user,
    })
    }catch(err){
    res.send(500).send(err)
}
})
      
module.exports=router;