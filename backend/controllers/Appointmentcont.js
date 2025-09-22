const Appointment=require("../model/Appointment")
const Stripe=require("stripe")
const transporter=require("../config/nodemailer")
const  aptmail=require("../config/Appointmenthtml")

const addAppointment=async(req,res)=>{
    const {docId,time,email}=req.body
    const userId=req.userId
    
try{
    const newappointment=new Appointment({
        doctor:docId,
        patient:userId,
        time:{
            day:time.day,
            date:time.date,
            timing:time.timing

        }
    })

    await newappointment.save()
    const mailContent={
      from:process.env.SMTP_MAIL,
      to:email,
      subject:"Appopintment booked successfully",
      html:aptmail.replace("{{appointmentDate}}",newappointment.time.date).replace("{{appointmentTime}}",newappointment.time.timing).replace("{{paymentStatus}}",newappointment.status.paid)
    }

    await transporter.sendMail(mailContent)

    res.json({success:true,message:"appointment booked"})
}
catch(error){
    console.log(error)
}
}

const getallappointments=async(req,res)=>{
    try{
        const datas=await Appointment.find({})
        res.json({success:true,payload:datas})
    }
    catch(error){
        console.log(error)
    }
}


const handlePayment=async(req,res)=>{
    const {price,id}=req.body
    const stripe=new Stripe(process.env.STRIPE_SECRET)
    const frontendurl="http://localhost:5173"
try{
    const session= await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:[{
            price_data:{
                currency:'inr',
                product_data:{
                    name:"appointment payment"
                },
                unit_amount:price*100
            },
            quantity:1
        
          




        }],
        mode:"payment",
        success_url:frontendurl+`/cart-checkout?success=true&id=${id}`,
        cancel_url:frontendurl+`/cart-checkout?success=false&id=${id}`

    })

    res.json({success:true,session_url:session.url})
}
 catch(error){
        console.log(error)
    }
}


const UpdatePaidField=async(req,res)=>{
    const {id}=req.body
    try{
        const apt = await Appointment.findByIdAndUpdate(id, { "status.paid": true },{new:true});
        
        res.json({success:true,payload:apt})

              
    }
    catch(error){
        console.log(error)
    }
}

const updateCompletedfield=async(req,res)=>{
    const id=req.body.id
    const status=req.body.status

    try{
        const apt=await Appointment.findByIdAndUpdate(id,{"status.completed":status},{new:true})
        res.json({success:true,payload:apt})

    }
    catch(error){
        console.log(error)
    }
}
module.exports={addAppointment,getallappointments,handlePayment,UpdatePaidField,updateCompletedfield}