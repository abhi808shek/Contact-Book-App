const mongoose = require("mongoose");
require('dotenv').config()

const dataBaseConnection = async() => {
  try {
    // const URI = process.env.MONGO_URL;
    await mongoose.connect("mongodb+srv://h4ae1r:powerdown@cluster0.zlfw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    console.log("DataBase Connected Successfullyy....");

  }
  catch (error) {
    console.log(error.message);
  }
}
dataBaseConnection();
