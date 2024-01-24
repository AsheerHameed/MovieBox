 const service = require("../service/register")
 
 const registerUser = async (req,res,next) => {
    try {
        const userRegister = await service.registerUser(req);
    
        res.send(userRegister);
        
    } catch (error) {
        console.log(error);
        res.status(error.status).send(error);
    }
 }

 module.exports = registerUser;