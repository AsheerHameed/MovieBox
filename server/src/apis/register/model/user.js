const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    emailid : String,
    username :
    {type:String},
    password : String
});

const User = mongoose.model('User', userSchema);


module.exports = User;
