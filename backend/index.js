const express = require("express");
const connectDB = require("./config/db")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())

app.get("/",async (req,res)=>{
    try {
        res.status(200).json({message:"Server started successfully"})
    } catch (error) {
        res.status(404).json({message:`Error occured : ${error}`})
    }
})

app.listen(PORT, async ()=>{
    try {
        console.log(`Server started successfully on port : ${PORT}`)
        await connectDB();
    } catch (error) {
        console.log(`Error occured : ${error}`)
    }
})