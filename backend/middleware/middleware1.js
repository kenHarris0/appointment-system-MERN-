
const jwt = require("jsonwebtoken");


const isAuth = async (req, res, next) => {
  const token = req.cookies.token; 
  if (!token) {
    return res.json({ success: false, message: "No token, not authorized" });
  }

  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify.id) {
      req.userId = verify.id;
      next();
    } else {
      return res.json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Token verification failed" });
  }
};

module.exports=isAuth