const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    bloodgroup:{type:String,enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]},
    age:{type:String},
    allergys:{type:String},
    address:{type:String},
    phone:{type:String},
    emergencyContact:{type:String},
    medicalHistory:{type:String},
    image:{type:String}


    
})

const user=mongoose.models.users || mongoose.model("user",schema)

module.exports=user