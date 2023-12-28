const express = require('express');
const app = express();
const tasks = require('./route/tasks')
var cors = require('cors')
app.use(cors())
const connectDB = require('./db/connect');
require ('dotenv').config();
const notFound = require('./middleware/not_found')
const errorHandellar = require('./middleware/error.handellar.js')
//middleware
app.use(express.json());

// Route
app.use("/api/v1/tasks",tasks);

app.use(notFound)
app.use(errorHandellar)
const port = process.env.Port || 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI) ;
        app.listen(port,console.log(`server listen to ${port}`));
    }catch(err){
        console.log(err);
    }
}

start();