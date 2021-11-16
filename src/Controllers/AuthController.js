const UserRegistrationModel = require("../Models/RegisterSchema");


const userLoginAuth = async (req, res) => {
    try {
        const data = req.body;
        if (!(data.email && data.password)) {
            return res.status(400).json({ message: "email or password field should not be empty." })
        }
        let user = await UserRegistrationModel.findOne({ email: data.email })
        if (!user) {
            return res.status(401).json({ message: "User Not Found.." })
        }
        if (user.password !== data.password) {
            return res.status(401).json({ message: "Wrong Credential.." })
        }
        return res.status(200).json({ message: "User LoggedIn..", userDetails: data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { userLoginAuth };