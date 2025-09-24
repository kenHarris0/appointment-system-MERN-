const Query =require("../model/Userqueries.js");


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


module.exports={addquery}