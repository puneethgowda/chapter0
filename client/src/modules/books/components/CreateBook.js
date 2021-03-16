import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Input/Textarea";
import Button from "../../../components/button/Button";
import { createBook, getBookById, editBook } from "../redux/actions";
import { useParams } from "react-router-dom";
import "../styles/createBook.scss";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const initialState = {
    title: "",
    shortDescription: "",
    longDescription: "",
    publishedOn: "",
    author: "",
    pageCount: "",
    image: "",
    language: ""
  }

function CreateBook(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [state, setState] = useState({
    ...initialState
  });
  const dispatch = useDispatch();
  const params = useParams();
  const { bookId } = params;
  const { succeeded, bookList } = useSelector((state) => state.books);
  const {
    title,
    shortDescription,
    longDescription,
    publishedOn,
    author,
    pageCount,
    language,
  } = state || {};

  useEffect(() => {
    if (bookId) {
      setIsEdit(true);
      dispatch(getBookById(bookId));
    }else{
      setIsEdit(false);
      setState(initialState)
    }
  }, [dispatch, bookId]);

  useEffect(() => {
    if (succeeded) {
      const [book] = bookList.filter((b) => b._id === bookId);
      debugger
      setState(book);
    }
  }, [succeeded]);


  function handleChange(e) {
    setState((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleImage(e) {
    let file = await toBase64(e.target.files[0]);
    setState((state) => ({
      ...state,
      image: file,
    }));
  }

  function add() {
    let body = {
      ...state,
    };

    if (isEdit) {
      body["_id"] = bookId;

      return dispatch(editBook(body));
    }

    dispatch(createBook(body));
  }

  return (
    <div className="create-book">
      {!isEdit && <h2>Create new book</h2>}
      {isEdit && <h2>Edit: {title}</h2>}

      <div className="row">
        <Input
          name="title"
          value={title}
          label="Book title"
          placeholder="Enter book title"
          onChange={handleChange}
        />
        <Textarea
          name="shortDescription"
          value={shortDescription}
          label="Short description"
          placeholder="Enter short description"
          onChange={handleChange}
        />
        <Textarea
          name="longDescription"
          value={longDescription}
          placeholder="Enter short description"
          label="Long description"
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <Input
          name="publishedOn"
          placeholder="Enter published on"
          value={publishedOn}
          label="Published on"
          onChange={handleChange}
        />

        <Input
          name="author"
          placeholder="Enter author name"
          value={author}
          label="Author"
          onChange={handleChange}
        />
        <Input
          name="pageCount"
          placeholder="Enter page count"
          value={pageCount}
          label="Page Count"
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <Input
          type="file"
          name="image"
          label="Book Image"
          onChange={handleImage}
        />
      </div>

      <div className="row">
        <Input
          name="language"
          placeholder="Enter language"
          value={language}
          label="Language"
          onChange={handleChange}
        />
      </div>

      <Button className="primary create-book__btn" onClick={add}>
        {isEdit ? "Edit" : "Create"}
      </Button>
    </div>
  );
}

export default CreateBook;
