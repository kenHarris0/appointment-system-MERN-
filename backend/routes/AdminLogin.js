const express=require("express")
const router=express.Router()
const isAuth=require("../middleware/AdminMiddleware")
const {login,register,logout,isuserAuth,getalluserData}=require("../controllers/AdminLogin")


router.post('/login',login)
router.post('/register',register)
router.post('/logout',logout)
router.post('/isauth',isAuth,isuserAuth)

router.get('/getalldata',isAuth,getalluserData)




module.exports=router