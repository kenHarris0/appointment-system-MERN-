const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})

const user=mongoose.models.users || mongoose.model("user",schema)

module.exports=user