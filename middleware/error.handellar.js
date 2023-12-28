const {CustomAPIError} = require ('../error/custom.error.js')
const errorHandellar = (error,req,res,next)=>{
    if(error instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(error.status).json({msg : error.message})
}

module.exports = errorHandellar;