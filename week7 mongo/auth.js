const jwt=require("jsonwebtoken");

JWT_SECRET = "secret"

function auth(req,res,next){
    const token=req.headers.token;

    const decoded=jwt.verify(token,JWT_SECRET);
    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(401).json({
            message:"Wrong credentials"
        })
    }
}


module.exports={
    auth,
    JWT_SECRET
}
