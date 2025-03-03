import Header from "./Header";
import { Link } from "react-router-dom";

export default function Favourites({
  categories,
  favouriteBooks,
  setSearchPage,
}) {
  console.log(favouriteBooks);
  return (
    <>
      <Header setSearchPage={setSearchPage} categories={categories} />
      <h1>Favourites</h1>
      <ul>
        {favouriteBooks &&
          favouriteBooks.map((book, i) => (
            <li key={i}>
              <Link to={`/details/${book.id}`}>{book.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
