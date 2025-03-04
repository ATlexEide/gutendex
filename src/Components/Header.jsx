import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ categories, setSearchPage }) {
  const testState = { someKey: "someValue" };
  window.history.pushState(testState, "page2.html");
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <header>
      <Link to={"/gutendex/"}>
        <p id="header-title">
          GUTEN <br />
          DEX
        </p>
      </Link>
      <nav>
        <ul id="categories">
          <div id="fav-container">
            <li>
              <Link to={`/favourites`}>Favourites</Link>
            </li>
            <div id="search-bar">
              <input
                type="text"
                name="title-search"
                id="title-search"
                placeholder="Search for a title"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setSearchPage(1);
                  navigate(`/search/${input}`);
                }}
              >
                <img src="/gutendex/public/search.svg" alt="search icon" />
              </button>
            </div>
          </div>
          <div id="categories-container">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link to={`/category/${cat}`}>{cat}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}
