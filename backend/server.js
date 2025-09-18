const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connection=require("./config/db")
const userRouter=require("./routes/userRoutes")
const cookieParser=require("cookie-parser")
const app=express()

const frontendorigin="http://localhost:5173"
dotenv.config()
app.use(cors({origin:frontendorigin,credentials:true}))
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/user',userRouter)



app.listen(5000,()=>{
    connection()
    console.log("server running")
})