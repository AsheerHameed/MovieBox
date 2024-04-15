const { registerUserMongo, fetchAll,fetchUserName } = require("../dao/register");
const User = require("../model/user");

const registerUser = async (req,res)=>{
  console.log(req.body);
    //check same useremail
    const userEmail = req.body.emailId;
    const ifExists = await fetchAll(User,userEmail);
    console.log(ifExists)

    if(ifExists) throw { message:"User Email Already Exists"};
    //if not register user
    const result = await registerUserMongo(User,req.body);


    return result;

}

const CheckPassword = async (req,res)=>{

    //check same useremail
    const userName = req.body.userName;
    console.log("uusususus",userName);
    const ifExists = await fetchUserName(User,userName);
    console.log("----------------->",ifExists);

    return ifExists;

}

module.exports = {registerUser,CheckPassword};
