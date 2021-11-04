const express = require("express");
const route = require("./src/Routers/Api");

require("./src/Database/db")
require('dotenv').config()

const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/",route);

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT,()=>{
    console.log("Server Conneted Successfully...");
})


