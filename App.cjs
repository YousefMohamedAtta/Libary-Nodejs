const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const userRouter = require('./Routes/user.cjs')
const bookRouter = require('./Routes/books.cjs')


const app = express()
app.use(bodyParser.json())

const url = "mongodb+srv://************@database.bs9dc2k.mongodb.net/Data"

const  connectDB = async() =>{
    try{
        mongoose.set("strictQuery", false)
        mongoose.connect(url)
        console.log("Connected to Mongo DB")
    } catch(err){
        console.log("error while connect to mongo"+ err)
        process.exit()
    }
}
connectDB()

app.use('/',userRouter)
app.use('/',bookRouter)
app.listen(6000)
