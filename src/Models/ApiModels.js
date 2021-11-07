const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:4,
        max:15

    },
    phone_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const UserModel = new mongoose.model("UserModel",usersSchema);

module.exports = UserModel;