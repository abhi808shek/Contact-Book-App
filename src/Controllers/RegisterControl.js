const UserRegistrationModel = require("../Models/RegisterSchema");

const createRegister = async (req,res)=>{
    try {
        let user = await UserRegistrationModel.findOne({email:req.body.email})
        if (user) {
            return res.status(400).json({error:"email is alredy exist.."})
        }
        let result = UserRegistrationModel(req.body)
        result = await result.save()
        console.log(result);
        res.send(result)
        console.log("DatA Added Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getRegisterData =async (req,res)=>{
    try {
        const show = await UserRegistrationModel.find();
        res.send(show)
        console.log(show);
       
    } catch (error) {
        console.log(error.message);
    }
}

const deleteSingleRegisterData =async (req,res)=>{
    try {
        const _id = req.params.id
        console.log(_id);
        let result = await UserRegistrationModel.findByIdAndDelete({_id})
        if (!_id) {
            console.log("Something Went Wrong..");
        }
        else{
            res.send(result)
            console.log("DatA single Deleted Successfully");
        }
    } catch (error) {
        console.log(error.message);
    }
}


const updateSingleRegisterData =async (req,res)=>{
    try {
        const _id = req.params.id
        console.log(_id);
        let result = await UserRegistrationModel.findByIdAndUpdate({_id},req.body,{new:true})
       res.send(result)
        console.log("Updated Successfully");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {createRegister,getRegisterData,deleteSingleRegisterData,updateSingleRegisterData}