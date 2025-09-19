const Doctor=require("../model/doctor")


const addDoctor=async(req,res)=>{
const image=req.file?req.file.filename:null;
const{name,speciality,degree,experience,about,fees,address}=req.body

try{
    const newDoc=new Doctor({
        name,image,speciality,degree,experience,about,fees,
        address
    })
    await newDoc.save()
    res.json({success:true,message:"doctor added"})
}
catch(error){
    console.log(error)
}
}

const getalldocs=async(req,res)=>{

try{
    const doctorslist=await Doctor.find({})
    res.json({success:true,payload:doctorslist})

}
catch(error){
    console.log(error)
}

}

const removedoc=async(req,res)=>{
    const id=req.body.id
try{
    const doc=await Doctor.findByIdAndDelete(id)
    if(!doc){
        return res.json({success:false,messgae:"unable to find a doctor"})
    }
    res.json({success:true,message:"doc deleted"})
}
catch(error){
    console.log(error)
}

}

const searchbyid=async(req,res)=>{
    const id=req.body.id

    try{
        const doctor=await Doctor.findById(id)
        if(!doctor){
            return res.json({success:false})
        }
        res.json({success:true,payload:doctor})
    }
    catch(error){
    console.log(error)
}

}

module.exports={addDoctor,getalldocs,removedoc,searchbyid}