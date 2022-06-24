const express= require("express")
const app = express()
const dotEnv= require("dotenv")
const mongoose= require("mongoose")
const cors = require("cors")

const authRoutes =require("./Routes/auth.js")


dotEnv.config()

mongoose.connect(
    process.env.DB_CONNECT,)
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err))

app.use(express.json())
app.use(cors())

app.use("api/users", authRoutes)
app.listen(3000,()=> console.log("connected to localhost"))

//Connecting to the Backend