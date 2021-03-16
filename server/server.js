import express from "express"
import  bodyParser from "body-parser"
import cors from "cors"

//db config
import database from "./src/config/db.js"

import Book from "./src/config/Book.js"

const app = express();
const router =  express.Router()

const port =  process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors());


app.get("/api/books", async function(req, res){
    try{
        const bookList = await Book.find({});
        res.send(bookList)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});

app.get("/api/books/:bookId", async function(req, res){
    const {bookId} = req.params;
    try{
        const book = await Book.find({"_id": bookId});
        res.send(book)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});

app.post("/api/books/add", async function(req, res){
    const {body} = req;
    try{
        const book = new Book(body);
        await book.save()
        res.send(book)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});

app.put("/api/books/update", async function(req, res){
    const {_id, ...rest} = req.body;
    try{
        const book = await Book.findOneAndUpdate({_id}, rest);
        res.send(book)
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})