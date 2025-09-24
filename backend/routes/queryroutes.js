const express=require("express")
const {addquery}=require("../controllers/Query")
const isAuth=require("../middleware/middleware1")

const router=express.Router()


router.post('/addquery',addquery)


module.exports=router