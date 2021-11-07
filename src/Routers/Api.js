const express = require("express");
const  {createUser,getUser,updateUser,deleteSingleUser,deleteManyUser,getStudentById} = require("../Controllers/ApiControl")
const router = express.Router();

router.route("/users")
.post(createUser)
.get(getUser)
.delete(deleteManyUser);

router.route("/users/:id")
.get(getStudentById)
.patch(updateUser)
.delete(deleteSingleUser);

module.exports = router;


