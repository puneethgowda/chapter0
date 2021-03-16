import React, { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getBookById } from "../redux/actions"
import "../styles/bookDetails.scss"

function BookDetails(props){
    const params = useParams()
    const dispatch = useDispatch();
    const bookList = useSelector(state => state.books.bookList);
    const {bookId} = params

    const [book] = bookList.filter((b)=> b._id === bookId)
    
    useEffect(() => {
        dispatch(getBookById(bookId)) 
    }, [dispatch, bookId])
    return (
        <div className="book-details">
            <div className="book-details__left">
                <img src={book?.image} alt=""/>
            </div>
            <div className="book-details__right">
                <h3>{book?.title}</h3>
                <div>{book?.author} - {book?.publishedOn}</div> 
                <h5>{book?.shortDescription}</h5>
                <p>{book?.longDescription}</p>

            </div>
        </div>
    )
}

export default BookDetails