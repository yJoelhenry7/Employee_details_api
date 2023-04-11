const express = require('express');
const sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get("/",(request,response)=>{
    response.send("Server is running");
})

app.listen(PORT, ()=>{
    console.log(`Server is up! and Running at port ${PORT}`)
})