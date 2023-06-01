const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const UploadRoutes=require('./routes/UploadRoutes');
app.use(cors());
app.use(express.json());
app.use(express.static("public"))
require('dotenv').config()
try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected");
}
catch(err)
{
    console.log(err);
}
app.use(UploadRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`);})