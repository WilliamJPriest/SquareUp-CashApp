const {Client, Environment,ApiError}= require("square")

const express= require("express")
const app = express()
const dotEnv= require("dotenv")
const mongoose= require("mongoose")
const cors = require("cors")



const authRoutes =require("./Routes/auth")
const receiptRoutes = require("./Routes/receiptRecords")
const paymentRoutes=require("./Routes/paymentProcessing")

dotEnv.config()

mongoose.connect(
    process.env.DB__CONNECT,)
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err))


const client = new Client({
    accessToken: process.env.API__KEY,
    environment: Environment.Sandbox,
    });
      
app.use(express.json())
app.use(cors())

app.use("/api/users", authRoutes)
app.use("/api", receiptRoutes)
app.use("connect.squareupsandbox.com/",paymentRoutes)

app.listen(3001,()=> console.log("connected to localhost"))

//Connecting to the Backend
