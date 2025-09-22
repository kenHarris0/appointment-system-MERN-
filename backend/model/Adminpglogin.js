const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    type:{type:String},
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
})


const Adminlogin = mongoose.models.adminlogin || mongoose.model("adminlogin", schema);

module.exports = Adminlogin;


