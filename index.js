const express = require("express");
const route = require("./src/Routers/Api");
// const path = require('path');

require("./src/Database/db")
require('dotenv').config()

const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/",route);

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('public/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
});


app.listen(PORT,()=>{
    console.log("Server Conneted Successfully...");
})


