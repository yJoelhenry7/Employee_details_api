const express = require('express');
const sequelize = require('sequelize');
const cors = require('cors')
var corsOptions = {
    origin: "http://localhost:8081"
    };
const app = express();
const PORT = process.env.PORT || 8080;
const router = require('./routes/dataRouter');
// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/router',router);

app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
    });
app.listen(PORT, ()=>{
    console.log(`Server is up! and Running at port ${PORT}`)
})