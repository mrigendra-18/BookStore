import mongoose from "mongoose"
const bookSchema= mongoose.Schema({
    Name:String,
    Price:Number,
    Category:String,
    image:String,
    Author:String
})

const Book = mongoose.model("Book",bookSchema);
export default Book;