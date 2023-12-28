const mongoose = require('mongoose')


const connectDB = (url)=>{
return mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology:true,
  })
}

module.exports = connectDB;