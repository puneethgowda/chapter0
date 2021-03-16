import mongoose from "mongoose"
const DB = "mongodb+srv://puneeth:password321@cluster0.r03ow.mongodb.net/chaptero?retryWrites=true&w=majority";

try {
    
    mongoose.connect(DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(()=>{
            console.log("Database connection successfully")
        })
} catch (e) {
    console.log("Failed to establish mongo connection")
}

export default {}

