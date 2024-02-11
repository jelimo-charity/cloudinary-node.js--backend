import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cloudinary from './cloudinary.js'
dotenv.config();


const Details = cloudinary;
const app = express()
const port= process.env.port
app.use(cors);

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))

app.listen(port, ()=>{
    console.log("server is running");
})