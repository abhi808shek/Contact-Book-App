const UserModel = require("../Models/ApiModels")

// Create User
const createUser = async (req, res) => {
    try {
        const user = new UserModel(req.body)
        const createStudent = await user.save();
        res.status(201).send(createStudent);
        console.log(createStudent);
    } catch (error) {
        console.log(error.message);
    }
}

// Get User
const getUser = async (req, res) => {
    try {
        const getStudent = await UserModel.find();
        res.send(getStudent);
        console.log(getStudent);
    } catch (error) {
        console.log(error.message);
    }
}
// Update User
const updateUser = async (req, res) => {
    try {
        const _id = req.params.id;
        let updateStudent = await UserModel.findById({ _id })
       const obj = {
       }
       if (req.body.name) {
           obj["name"] = req.body["name"]
       }
       if (req.body.phone_no) {
        obj["phone_no"] = req.body["phone_no"]
       }
       if (req.body.email) {
        obj["email"] = req.body["email"]
       }

        updateStudent = await UserModel.findByIdAndUpdate({_id},obj,{new:true});
        console.log(updateStudent,"line 32");
        res.json(updateStudent);
    }
        catch (error) {
            res.status(400).send()
            console.log(error.message);
        }

    }

// Delete User
const deleteSingleUser = async (req, res) => {
        try {
            const _id = req.params.id;
            const deleteStudent = await UserModel.findByIdAndDelete({ _id })
            console.log(_id);
            if (!_id) {
                return res.status(400).send()
            }
            else {
                res.send(deleteStudent);
                console.log("siNGLE dATA dELETED");
            }
        } catch (error) {
            res.status(500).send(error)
        }

    }

    const deleteManyUser = async (req, res) => {
        try {
            const deleteStudent = await UserModel.deleteMany()
                 res.send(deleteStudent);
                 console.log("Successfully Deleted All Data...");
            
        } catch (error) {
            res.status(404).send(error)
        }

    }
    module.exports = { createUser, getUser, updateUser, deleteSingleUser,deleteManyUser };