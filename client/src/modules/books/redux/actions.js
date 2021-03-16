import { toast } from 'react-toastify';

import {
  fetchBooksLoading,
  fetchBooksSucceeded,
  fetchBooksFailed,
  createBookLoading,
  createBookSucceeded,
  createBookFailed,
  editBookLoading,
  editBookSucceeded,
  editBookFailed
} from "./reducer";
import { callApi } from "../../../helpers/callApi";

import {history} from "../../../App"

export const getBooks = () => (dispatch) => {
  dispatch(fetchBooksLoading());
  callApi({
    url: "/api/books",
    method: "GET",
  })
    .then(({ data }) => {
      dispatch(fetchBooksSucceeded(data));
    })
    .catch((e) => {
      dispatch(fetchBooksFailed());
    });
};

export const getBookById = (id) => (dispatch) => {
  dispatch(fetchBooksLoading());
  callApi({
    url: `/api/books/${id}`,
    method: "GET",
  })
    .then(({ data }) => {
      dispatch(fetchBooksSucceeded(data));
    })
    .catch((e) => {
      dispatch(fetchBooksFailed());
    });
};

export const createBook = (body) => (dispatch) => {
  dispatch(createBookLoading());
  callApi({
    url: "/api/books/add",
    method: "POST",
    body,
  })
    .then(({ data }) => {
      dispatch(createBookSucceeded(data));
      toast.success("Successfully created")
      history.push("/")
    })
    .catch((e) => {
      dispatch(createBookFailed());
      toast.error("Failed to create")
    });
};



export const editBook = (body) => (dispatch) => {
  dispatch(editBookLoading());
  callApi({
    url: "/api/books/update",
    method: "PUT",
    body,
  })
    .then(({ data }) => {
      dispatch(editBookSucceeded(data));
      toast.success("Successfully Saved")
      history.push("/")
    })
    .catch((e) => {
      dispatch(editBookFailed());
      toast.error("Failed to Saved")
    });
};
