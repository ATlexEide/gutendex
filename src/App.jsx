import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Favourites from "./Components/Favourites";
import Details from "./Components/Details";

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
  const [cache, setCache] = useState({});
  const [books, setBooks] = useState([]);
  const [favouriteBooks, setFavouriteBooks] = useState([
    { title: "test" },
    { title: "moby" },
    { title: "my" },
    { title: "dick" },
  ]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home cache={cache} categories={categories} />}
        />
        <Route
          path="/category/:id"
          element={
            <Category
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
              categories={categories}
              favouriteBooks={favouriteBooks}
              setFavouriteBooks={setFavouriteBooks}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<Details categories={categories} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
