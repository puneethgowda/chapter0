import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../../books/components/BookCard";
import { getBooks } from "../../books/redux/actions";
import Loader from "../../../components/loader";

import "../styles/home.scss";

function Home() {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");

  const { bookList, succeeded, loading } = useSelector((state) => state.books);



  const handleChange = (e) => {
    if (e.charCode === 13) {
      return filter();
    }
    setSearch(e.target.value);
  };

  const filter = () => {
    const list = bookList.filter((l) =>
      l.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(list);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(bookList);
  }, [succeeded, bookList]);

  return (
    <div className="home">
      <div className="search-wrapper">
        <div className="search-wrapper__input-wrapper">
          <input
            value={search}
            name="search"
            onChange={handleChange}
            className="search-wrapper__input"
            onKeyPress={handleChange}
          />
          {search !== "" && (
            <i className="fa fa-times" onClick={() => setSearch("")} />
          )}
        </div>

        <button className="search-wrapper__btn" onClick={filter}>
          <i className="fa fa-search" />
        </button>
      </div>

      <div className="home__content">
        {loading && <Loader loading={loading} />}

        {!!filteredData.length && !loading && (
          <div className="home__list">
            {filteredData.map((book) => (
              <BookCard key={book._id} {...book} />
            ))}
          </div>
        )}

        {!filteredData.length && !loading && (
          <div className="home__empty">
            <h4>Not found</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
