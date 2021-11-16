const mongoose = require("mongoose");
require('dotenv').config()

const dataBaseConnection = async() => {
  try {
    const URI = process.env.MONGO_URL;
    await mongoose.connect(URI)
    console.log("DataBase Connected Successfullyy....");

  }
  catch (error) {
    console.log(error.message);
  }
}
dataBaseConnection();
