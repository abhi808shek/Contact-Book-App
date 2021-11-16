const express = require("express");
const userRouter = express.Router();
const {createRegister,getRegisterData,deleteSingleRegisterData,updateSingleRegisterData} = require('../Controllers/RegisterControl')


userRouter.route("/register")
.post(createRegister)
.get(getRegisterData);


userRouter.route("/register/:id")
.delete(deleteSingleRegisterData)
.patch(updateSingleRegisterData)


module.exports = userRouter;