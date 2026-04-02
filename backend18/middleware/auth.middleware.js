import jwt from "jsonwebtoken";

const authMiddleware = (req, res ,next )=>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                message: "no token provided"
            });
        }

        const token = authHeader.split(" ")[1]
        if(!token){
            return res.status(401).json({
                message: "invalid token formate"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded;
         next();
    }catch(err){
         return res.status(401).json({
            message: "Unauthorized"
         });
    }
};
export default authMiddleware;