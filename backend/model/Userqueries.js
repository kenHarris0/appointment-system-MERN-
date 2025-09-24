const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    
    name:{type:String},
    email:{type:String,unique:true},
    query:{type:String},
})


const query =  mongoose.model("query", schema);

module.exports = query;