const express=require("express")
const {addAppointment,getallappointments,handlePayment,UpdatePaidField,updateCompletedfield}=require("../controllers/Appointmentcont")
const router=express.Router()
const isAuth=require("../middleware/middleware1")

router.post('/add',isAuth,addAppointment)
router.get('/get',getallappointments)
router.post('/makepayment',handlePayment)
router.post('/updatepay',UpdatePaidField)

router.post('/updatestatus',updateCompletedfield)

module.exports=router