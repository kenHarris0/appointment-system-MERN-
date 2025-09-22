const express=require("express")
const multer=require("multer")
const {addDoctor,getalldocs,removedoc,searchbyid,searchbyemail}=require("../controllers/doccontroller")
const { route } = require("./userRoutes")
const router=express.Router()


const storage=multer.diskStorage({
    destination:"Doctors",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const uploads=multer({storage:storage})




router.post('/adddoc',uploads.single('image'),addDoctor)
router.get('/listalldoc',getalldocs)
router.post('/deldoc',removedoc)

router.post('/searchbyid',searchbyid)

router.post('/searchbyemail',searchbyemail)

module.exports=router
