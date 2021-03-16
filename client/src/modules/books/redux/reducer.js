import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    bookList:[],
    loading: false,
    succeeded: false,
    failed: false
}
const books = createSlice({
    name: 'books',
    initialState,
    reducers: {
      fetchBooksLoading(state, action) {
        state.loading = true;
        state.succeeded = false;
        state.failed = false;
        state.bookList = []
      },
      fetchBooksSucceeded(state, action){
        state.loading = false;
        state.succeeded = true;
        state.failed = false;
        state.bookList = action.payload
      },
      fetchBooksFailed(state, action){
        state.loading = false;
        state.succeeded = false;
        state.failed = true;
      },

      createBookLoading(state, action) {
        state.loading = true;
        state.succeeded = false;
        state.failed = false;
      },
      createBookSucceeded(state, action){
        state.loading = false;
        state.succeeded = true;
        state.failed = false;
        state.bookList = [...state.bookList, action.payload]
      },
      createBookFailed(state, action){
        state.loading = false;
        state.succeeded = false;
        state.failed = true;
      },
      
      editBookLoading(state, action) {
        state.loading = true;
        state.succeeded = false;
        state.failed = false;
      },
      editBookSucceeded(state, action){
        state.loading = false;
        state.succeeded = true;
        state.failed = false;
        state.bookList = [...state.bookList, action.payload]
      },
      editBookFailed(state, action){
        state.loading = false;
        state.succeeded = false;
        state.failed = true;
      }
    }
  })

  export const  {
    fetchBooksLoading,
    fetchBooksSucceeded,
    fetchBooksFailed,
    createBookLoading,
    createBookSucceeded,
    createBookFailed,
    editBookSucceeded,
    editBookLoading,
    editBookFailed
  } = books.actions


  export const reducer  = books.reducer