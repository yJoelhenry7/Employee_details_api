const express = require('express');
const sequelize = require('sequelize');
const cors = require('cors')
var corsOptions = {
    origin: "http://localhost:3001"
    };
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// routes
app.get("/",(request,response)=>{
    response.send("Server is running");
})

app.listen(PORT, ()=>{
    console.log(`Server is up! and Running at port ${PORT}`)
})