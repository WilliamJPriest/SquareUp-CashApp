const express= require("express")
const app = express()
const dotEnv= require("dotenv")
const mongoose= require("mongoose")
const cors = require("cors")

const authRoutes =require("./Routes/auth")


dotEnv.config()

mongoose.connect("mongodb+srv://HackathonTeam:HackathonTeam@cluster0.c7mwp.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err))

app.use(express.json())
app.use(cors())

app.use("api/users/", authRoutes)
app.listen(3001,()=> console.log("connected to localhost"))

//Connecting to the Backend