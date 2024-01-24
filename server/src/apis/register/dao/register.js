
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

async function fetchAll(model,userEmail){
    const result = await model.findOne({emailid : userEmail});
    return result;
}

module.exports = {registerUserMongo,fetchAll};