const express=require("express")
const {addquery,getallquery,removequery,adminreplysend}=require("../controllers/Query")
const isAuth=require("../middleware/middleware1")

const router=express.Router()


router.post('/addquery',addquery)
router.get('/getall',getallquery)
router.post('/remove',removequery)

router.post('/adminreply',adminreplysend)


module.exports=router