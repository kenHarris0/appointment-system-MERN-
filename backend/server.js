const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connection=require("./config/db")
const userRouter=require("./routes/userRoutes")
const docrouter=require('./routes/doctorroutes')
const cookieParser=require("cookie-parser")
const Appointrouter=require("./routes/Appointmentroutes")
const Adminrouter=require("./routes/AdminLogin")
const queryrouter=require("./routes/queryroutes")
const app=express()

const frontendorigin="http://localhost:5173"
dotenv.config()
app.use(cors({origin:frontendorigin,credentials:true}))
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/user',userRouter)
app.use('/doc',docrouter)

//images static virtual addresses
app.use('/doctorimage',express.static("Doctors"))
app.use('/userimage',express.static("Users"))

app.use('/appointment',Appointrouter)
app.use('/admin',Adminrouter)

app.use('/query',queryrouter)


app.listen(5000,()=>{
    connection()
    console.log("server running")
})