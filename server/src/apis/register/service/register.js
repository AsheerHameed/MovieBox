const { registerUserMongo, fetchAll } = require("../dao/register");
const User = require("../model/user");

const registerUser = async (req,res)=>{
  console.log(req.body);
    //check same useremail
    const userEmail = req.body.emailId;
    const ifExists = await fetchAll(User,userEmail);

    if(ifExists) throw {status : 400 , message:"User Email Already Exists"};
    //if not register user
    const result = await registerUserMongo(User,req.body);


    return result;

}

module.exports = {registerUser};
