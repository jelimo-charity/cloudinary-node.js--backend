import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cloudinary from './cloudinary.js'
dotenv.config();


const Details = cloudinary;
const app = express()
const port= process.env.PORT
app.use(cors());

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))
   

app.get("/", (req,res)=>{
    res.send("welcome to the hotel menu page")
})

app.post("/", async(req,res)=>{
   const {image} = req.body;
   const uploadedImage= await cloudinary.uploader.upload(image, {
    upload_preset: 'test_two',
    public_id: "avatar",
    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
   },
   function(error, result){
    if(error){
        console.log(error);
    }     
  console.log(result);});
  try {
    res.status(200).json(uploadedImage)
  } catch (error) {
    console.log(error)
  }
});
app.listen(port, ()=>{
    console.log("server is running");
})
