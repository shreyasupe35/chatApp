import jwt from "jsonwebtoken"

const isauthenicated=async(req,res,next)=>{
    try {
        const token =req.cookies.token;
        if(!token){
            return res.status(402).json({
                message:"User Not authenticated"
            })
        };

        const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token"
            });
        };
        req.id=decode.userId;

        next();
    } catch (error) {
        console.log(error)
    }

}

export default isauthenicated;