const Query =require("../model/Userqueries.js");
const nodemailer=require("nodemailer")
const replymailtemplate=require("../config/Replymail.js")
const transporter=require("../config/nodemailer.js")
const addquery=async(req,res)=>{
const {name,email,query}=req.body


try{
const newquery=new Query({
    name,email,query
})
await newquery.save()
res.status(200).json({success:true,message:"query added successfully"})

}
catch(error){
    console.log(error)
}
}

const getallquery=async(req,res)=>{
    try{
        const querys=await Query.find()
        res.json({success:true,payload:querys})
    }
    catch(error){
    console.log(error)
}
}


const removequery=async(req,res)=>{
    const id=req.body.id
    try{
const query=await Query.findByIdAndDelete(id)
 res.json({success:true,message:"deleted successfully"})

    }
      catch(error){
    console.log(error)
}
}

const adminreplysend=async(req,res)=>{
    const {email,reply}=req.body
    try{
        const maildata={
            from:process.env.SMTP_MAIL,
            to:email,
            subject:"Reply from Admin",
            html:replymailtemplate.replace("{{name}}",email).replace("{{adminReply}}",reply)
        }
        await transporter.sendMail(maildata)
        res.json({success:true,message:"reply sent successfully"})
    }

       catch(error){
    console.log(error)
}
}

module.exports={addquery,getallquery,removequery,adminreplysend}