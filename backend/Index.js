const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwabtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database Connection with MongoDB

mongoose.connect("mongodb+srv://binitakarki:bbinita3355@cluster0.uqvn7ul.mongodb.net/ e-commerce");

//API Creation

app.get("/",(req,res)=>{
    res.send("ExpressApp is Running")
})

app.listen(port,(error)=>{
    if (!error) {
        console.log("Server running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})