import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/userRoutes.js"


const app = express()
app.use(cors())

app.use(express.json())
import bookRoute from './routes/bookRoute.js'
dotenv.config()


const PORT = process.env.PORT || 4000
const uri =process.env.mongoDBURL

try {
   mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   }) 
   console.log("connected to MongoDB")
} catch (error) {
    console.log("Error",error)
    
}

// define routes
app.use('/',(req,res)=>{
  res.send("this is home route")
})
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})