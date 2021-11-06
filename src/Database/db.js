const mongoose = require("mongoose");
require('dotenv').config()

const URI = process.env.DB_URL;

const dataBaseConnection = async()=>{

  try {
    await  mongoose.connect(URI)
    console.log("DataBase Connected Successfullyy....");
  } catch (error) {
    console.log(error.message);
      console.error("Failed To Connect..");
  }

}

dataBaseConnection();


