const mongoose = require("mongoose");
require('dotenv').config()
const URL = process.env.DB_URL;


const dataBaseConnection = async()=>{

  try {
    await  mongoose.connect(URL)
    console.log("DataBase Connected Successfullyy....");
  } catch (error) {
    console.log(error.message);
      console.error("Failed To Connect..");
  }

}

dataBaseConnection();


