const express = require("express");
const authRouter = express.Router();
const {userLoginAuth} = require("../Controllers/AuthController")

authRouter.route("/auth")
.get()
.post(userLoginAuth)

module.exports = authRouter;