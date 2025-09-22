const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    doctor:{type:String},
    patient:{type:String},
    status:{
        paid:{type:Boolean,default:false},
        completed:{type:String,default:"yettosee"}
    },
    time:{
        day:{type:String},
        date:{type:String},
        timing:{type:String}
    }
})


const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", schema);

module.exports = Appointment;


