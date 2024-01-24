const express =  require("express");
const registerUser = require("../apis/register/api/register");
const userRouter = express.Router();

userRouter.post("/register",registerUser);

module.exports = userRouter;