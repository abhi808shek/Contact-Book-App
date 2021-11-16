const mongoose = require('mongoose');
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');
const userRegistrationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLenght:4,
        maxLength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function() {
            return emailValidator.validate(this.email)
        }
    },
    password:{
        type:String,
        required:true,
        minLenght:8
    },
    Confirmpassword:{
        type:String,
        required:true,
        validate:function() {
             this.Confirmpassword == this.password;
        }
    }
});

userRegistrationSchema.pre("save",function(){
    this.Confirmpassword=undefined;
})

userRegistrationSchema.pre("save",async function(){
   let salt =await bcrypt.genSalt();
    console.log("salt",salt);
   let hashString = await bcrypt.hash(this.password,salt)
   console.log(hashString);
    this.password=hashString;

})

const UserRegistrationModel = mongoose.model("UserRegistrationModel",userRegistrationSchema);

module.exports = UserRegistrationModel;