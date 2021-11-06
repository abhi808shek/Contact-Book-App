const mongoose = require("mongoose");

const URI = `mongodb+srv://h4ae1r:powerdown@cluster0.zlfw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dataBaseConnection = async()=>{

  try {
    await  mongoose.connect(URI)
    console.log("DataBase Connected Successfullyy....");
  } catch (error) {
    console.log(error.message);
  }

}

dataBaseConnection();


