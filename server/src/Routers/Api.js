const express = require("express");
const  {createUser,getUser,updateUser,deleteSingleUser,deleteManyUser} = require("../Controllers/ApiControl")
const router = express.Router();

router.route("/users")
.post(createUser)
.get(getUser)
.delete(deleteManyUser);

router.route("/users/:id")
.patch(updateUser)
.delete(deleteSingleUser);

module.exports = router;


