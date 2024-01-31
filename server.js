import  express  from "express";
import config from "./src/database/config.js";

const app = express();

app.get( "/", (req,res)=>{
    res.send("Welcome to hotel menu api!")
});

app.listen(config.port || 3030, ()=>{
    console.log(`Server is running at port ${config.port}`);
})