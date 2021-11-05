const express = require("express");
const route = require("./src/Routers/Api");

require("./src/Database/db")
require('dotenv').config()

const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/",route);
app.use(express.static("client/build"));

const PORT = process.env.PORT || 8000;




app.listen(PORT,()=>{
    console.log("Server Conneted Successfully...");
})

