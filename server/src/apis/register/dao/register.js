
async function registerUserMongo(model,reqBody) {
    const data = {
        emailid : reqBody.emailId,
        username : reqBody.userName,
        password : reqBody.password
    };
    const result = await model.create(data);

    // await model.save();

    return result;



}

const User=require('../model/user')

async function fetchAll(model,userEmail){
    const result = await model.findOne({emailid : userEmail});
    return result;
}


async function fetchUserName(model,userName){
  const result = await User.findOne({username : userName});
  return result;
}

// const data=fetchAll(User,'richa@doshaheen.com')

module.exports = {registerUserMongo,fetchAll,fetchUserName};
