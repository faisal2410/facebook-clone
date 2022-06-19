const {readdirSync}=require('fs')
const express =require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const port= process.env.PORT||8000



app.use(express.json())
app.use(cors());
// routes
readdirSync("./routes").map(r=>app.use("/",require(`./routes/${r}`)))

app.get("/",(req,res)=>{
    res.send("Welcome from home")
});

app.get("/books",(req,res)=>{
    res.send("dfadsfasd fasdfdf")
})

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

app.listen(port,()=>{
    console.log(`Server is listening from ${port}`)
})
