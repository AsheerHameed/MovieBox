const service = require("../service/register");

const registerUser = async (req, res, next) => {
  try {
    const userRegister = await service.registerUser(req);
    res.send(userRegister);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const loginUser = await service.CheckPassword(req);
    console.log("-------------------->",loginUser);
    res.json(loginUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {registerUser,loginUser};
