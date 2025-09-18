const express=require("express")
const {login,register,logout,isuserAuth,getalluserData}=require("../controllers/usercontroller")
const isAuth=require("../middleware/middleware1")

const router=express.Router()

router.post('/login',login)
router.post('/register',register)
router.post('/logout',logout)

router.post('/isuserauth',isAuth,isuserAuth)
router.get('/getalluser',isAuth,getalluserData)



module.exports=router

