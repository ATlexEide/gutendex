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
      <Link to={"/gutendex"}>
        <h1>Gutenberg oppgave</h1>
      </Link>
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
          Search
        </button>
      </div>
      <nav>
        <ul id="categories">
          <Link to={`/favourites`}>Favourites |</Link>
          {categories.map((cat, i) => (
            <li key={i}>
              <Link to={`/category/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
