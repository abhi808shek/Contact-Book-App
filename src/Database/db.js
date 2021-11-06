const mongoose = require("mongoose");
require('dotenv').config()

const URI = "mongodb+srv://h4ae1r:Abhi@7414@cluster0.zlfw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityretryWrites=true&w=majority";

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


