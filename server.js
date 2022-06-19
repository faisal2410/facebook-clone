const {readdirSync}=require('fs')
const express =require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port= process.env.PORT||8000




app.use(cors());
readdirSync("./routes").map(r=>app.use("/",require(`./routes/${r}`)))

app.get("/",(req,res)=>{
    res.send("Welcome from home")
});

app.get("/books",(req,res)=>{
    res.send("dfadsfasd fasdfdf")
})

app.listen(port,()=>{
    console.log(`Server is listening from ${port}`)
})
