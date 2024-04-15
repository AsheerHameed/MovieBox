const express = require("express");
const { registerUser, loginUser } = require("../apis/register/api/register");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
