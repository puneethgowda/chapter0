import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import { reducer as BooksReducer } from "../modules/books/redux/reducer";



const store = configureStore({
    reducer: {books: BooksReducer},
    middleware: [thunk]
  })
  
  export default store