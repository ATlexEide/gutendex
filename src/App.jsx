import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import { useState } from "react";

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
              cache={cache}
              setCache={setCache}
              books={books}
              setBooks={setBooks}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
