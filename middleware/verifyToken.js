const jwt = require ("jsonwebtoken");
const { promisify } = require ("util");

module.exports = async(req, res, next)=>{
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];

        if(!token){
            return res.status(401).json({
                status: "Fail",
                error: "You do not pass token in headers."
            });
        };

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
        // const mytoken = jwt.sign('abcde', process.env.TOKEN_SECRET);
        // console.log(mytoken);
        
        next();
    } catch (error) {
        res.status(403).json({
            status: "Fail",
            message: "Invalid token",
            error: error.message,
        });
    }
}