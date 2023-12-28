const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,'please give name of course'],
        trim : true,
        maxLength:[20,'name can not be more than 20 charactes']
    },
    completed : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',taskSchema)
