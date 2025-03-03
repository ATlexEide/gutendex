import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Favourites from "./Components/Favourites";
import Details from "./Components/Details";
import SearchResult from "./Components/SearchResult";

function App() {
  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];
  const favouriteBookStorage = JSON.parse(
    localStorage.getItem("favourite_books")
  )
    ? JSON.parse(localStorage.getItem("favourite_books"))
    : [];
  const [cache, setCache] = useState({});
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState();
  const [favouriteBooks, setFavouriteBooks] = useState(favouriteBookStorage);
  const [searchPage, setSearchPage] = useState(1);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              cache={cache}
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              categories={categories}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <Category
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              categories={categories}
              cache={cache}
              setCache={setCache}
              books={books}
              setBooks={setBooks}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              categories={categories}
              favouriteBooks={favouriteBooks}
              setFavouriteBooks={setFavouriteBooks}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              currentBook={currentBook}
              setCurrentBook={setCurrentBook}
              favouriteBooks={favouriteBooks}
              setFavouriteBooks={setFavouriteBooks}
              categories={categories}
            />
          }
        />
        <Route
          path="/search/:id"
          element={
            <SearchResult
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              categories={categories}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
