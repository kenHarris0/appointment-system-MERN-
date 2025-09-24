const express=require("express")
const {login,register,logout,isuserAuth,getalluserData,getallusers,updateProfileImage}=require("../controllers/usercontroller")
const isAuth=require("../middleware/middleware1")
const multer=require("multer")
const router=express.Router()


const storage=multer.diskStorage({
    destination:"Users",
    filename:(req,file,cb)=>{
        cb(null,`${file.originalname}`)
    }
})
const upload=multer({storage:storage})




router.post('/login',login)
router.post('/register',upload.single("image"),register)
router.post('/logout',logout)

router.post('/isuserauth',isAuth,isuserAuth)
router.get('/getalluser',isAuth,getalluserData)

router.get('/getusersfromdb',getallusers)

router.post('/changeprofile',isAuth,upload.single("image"),updateProfileImage)

module.exports=router

