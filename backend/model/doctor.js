const mongoose=require("mongoose")



const schema=new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    speciality:{type:String},
    degree:{type:String},
    experience:{type:String},
    about:{type:String},
    fees:{type:String},
    addess:{type:String}

})

const doc=mongoose.models.doctors || mongoose.model("doctor",schema)

module.exports=doc