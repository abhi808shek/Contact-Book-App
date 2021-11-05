const mongoose = require("mongoose");
require('dotenv').config()

const dataBaseConnection = async()=>{

  try {
    await  mongoose.connect(process.env.DB_URL)
    console.log("DataBase Connected Successfullyy....");
  } catch (error) {
    console.log(error.message);
      console.error("Failed To Connect..");
  }

}

dataBaseConnection();


