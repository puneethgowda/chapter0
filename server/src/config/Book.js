import mongoose from "mongoose"

const BookSchema = mongoose.Schema({
    title: String,
    shortDescription: String,
    longDescription: String,
    publishedOn: String,
    author: String,
    pageCount: String,
    image: String,
    category:[{
        type: String
    }],
    language: String,
    tags:[{
        type: String
    }]
},{
    timestamps: true
});


export default mongoose.model('books', BookSchema);;
