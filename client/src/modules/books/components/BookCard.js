import React from "react";
import "../styles/bookCard.scss";
import { useHistory } from "react-router-dom";

function BookCard(props) {
  const history = useHistory();
  const { _id, title, image, author } = props;
  function goToDetails() {
    history.push(`/book/${_id}`);
  }

  function goToEdit(e) {
      e.stopPropagation()
    history.push(`/book/edit/${_id}`);
  }
  return (
    <div className="book-card" onClick={goToDetails}>
      <div className="book-card__img-wrapper">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <div className="book-card__author">
        <h6>{author}</h6> <i className="fa fa-pencil-alt" onClick={goToEdit}/>
      </div>
    </div>
  );
}

export default BookCard;
