const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const UserModel = new mongoose.model("UserModel",usersSchema);

module.exports = UserModel;