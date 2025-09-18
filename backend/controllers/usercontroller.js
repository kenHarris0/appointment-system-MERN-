const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const found = await User.findOne({ email });
    if (found) {
      return res.json({ success: false, message: "Please login, user already exists" });
    }

    const hashedpswd = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedpswd });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "5h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const cmp = await bcrypt.compare(password, user.password);
    if (!cmp) {
      return res.json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "5h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    });

    res.json({ success: true, message: "Logged out" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};

const isuserAuth=async(req,res)=>{
    try{
        res.json({success:true,message:"user authenticated"})
    }
    catch(error){
        console.log(error)
    }
}

const getalluserData=async(req,res)=>{
  const userId=req.userId
  try{
    const user=await User.findById(userId)
    if(!user){
      return res.json({success:false,message:"falied to fetch user data"})
    }
    res.json({success:true,payload:{email:user.email,name:user.name}})
  }
  catch(error){
    console.log(error)
  }
}

module.exports = { register, login, logout, isuserAuth,getalluserData };
