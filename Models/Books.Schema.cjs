const mongoose = require ('mongoose')
const Schema = mongoose.Schema



const BookSchema = new Schema({
    name : String,
    price : Number ,
    author : String ,
    description : String  ,
    role: {type: String , default: "User"} 
})

module.exports = mongoose.model("Books.Schema",BookSchema)