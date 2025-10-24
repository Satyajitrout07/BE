import jwt from 'jsonwebtoken';
import User from  '../models/user.js';

export const protect = async (req,res,next) => {
    const token = req.headers.authorization;
    if (!token) {
        return  res.status(401).json({success:false,message:"Not authorized, no token"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({success:false,message:"Not authorized, token failed"});
    }
}