 const express = require("express")
 const app = express()
 const cors = require("cors")
 require("dotenv").config()
 const port = process.env.PORT;

 app.get("/",(req,res)=>{
    res.send("Hello world")
 });

 app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
 })