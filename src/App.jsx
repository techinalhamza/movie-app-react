import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import "./App.css";
const App = () => {
  const [movie, setMovie] = useState([]);
  const [movieName, setMovieName] = useState("kabhi");
  const [searchValue, setSearchValue] = useState("");

  const fetchMovie = async () => {
    var API = `https://omdbapi.com/?s=${movieName}&apikey=67217a2d`;

    try {
      const response = await axios.get(API);
      const data = response.data.Search;
      setMovie(data);
      console.log(movie);
    } catch (error) {}
  };
  // console.log(movie);
  console.log(searchValue);

  const handelSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const filterMovie = () => {
    setMovieName(searchValue);
  };

  useEffect(() => {
    fetchMovie();
  }, [filterMovie]);

  return (
    <>
      <header className="header flex justify-between items-center px-40 py-8">
        <div className="header-text">
          <h1 className="font-bold text-white text-3xl">Movie App</h1>
        </div>
        <div className="search-bar flex items-center justify-between bg-[#010F1D] p-3 rounded-full w-80">
          <input
            type="search"
            placeholder="Search..."
            className="bg-inherit border-none outline-none w-full"
            value={searchValue}
            onChange={handelSearch}
          />
          <button className="search-button">
            <CiSearch
              style={{ fontSize: "1.5rem", color: "#fff" }}
              onClick={filterMovie}
            />
          </button>
        </div>
        <div className="user-details ">
          <FaRegUserCircle style={{ fontSize: "2rem", color: "#fff" }} />
        </div>
      </header>

      <div className="card-container flex items-center gap-8 flex-wrap px-40">
        {movie.map((val) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={val.Poster}
                class="card-img-top"
                alt="..."
                className="w-full aspect-[4/3] object-cover"
              />
              <div class="card-body">
                <h5 class="card-title">{val.Title}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary mt-2">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
