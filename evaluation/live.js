const express= require("express");
const { ConnectionCheckOutFailedEvent } = require("mongodb");

const mongoose= require("mongoose");
const { append } = require("vary");

const app= express();

 Connect= mongoose.connect(
    "mongodb+srv://akash:akash_7492@cluster0.qjepb.mongodb.net/Bank?retryWrites=true&w=majority"
)

app.listen(7492, ()=>{
    Connect();
    console.log("listening on port 7492");
})