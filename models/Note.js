const mongoose = require("mongoose")
const Schema =    mongoose.Schema


const noteSchema = new Schema({
   title:{
        type:String
   }  ,
   content:{
         type:String
   },
    timestamp:{
         type:Date,
         default: new Date().getUTCDate()
    }


})


module.exports =  mongoose.model('notes',noteSchema)