const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLenght:4,
        maxLength:15

    },
    phone_no:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function() {
            return emailValidator.validate(this.email)
        }
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const UserModel = new mongoose.model("UserModel",usersSchema);

module.exports = UserModel;