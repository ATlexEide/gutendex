import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { addToFav, removeFromFav } from "../js/handleFavourites";
import Throbber from "./Throbber";

function Details({
  setSearchPage,
  setCurrentBook,
  favouriteBooks,
  setFavouriteBooks,
  categories,
}) {
  const [book, setBook] = useState({});
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // Check if book is in favourites to display properly

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentBook(res);
        setBook(res);
        setIsLoading(false);
      });
  }, [id]);

  if (!isFav && favouriteBooks.map((obj) => obj.id === book.id).includes(true))
    setIsFav(true);

  return (
    <>
      {isLoading && <Throbber />}
      <Header setSearchPage={setSearchPage} categories={categories} />
      <h1>Details</h1>
      {book.title && <h2>{book.title}</h2>}
      {book.formats && (
        <img src={book.formats["image/jpeg"]} alt={`${book.title} cover`} />
      )}
      {/* {book.authors && (
        <ul>
          {book.authors.map((author, i) => (
            <li key={i}>{author}</li>
          ))}
        </ul>
      )} */}
      {book.download_count && <p>Downloads: {book.download_count}</p>}
      {book.category && <p>{book.category}</p>}
      {book.languages && (
        <ul>
          <p>Languages:</p>
          {book.languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      )}
      {book.formats && (
        <a target="_blank" href={book.formats["text/plain; charset=us-ascii"]}>
          <button>Read</button>
        </a>
      )}
      {book.formats && (
        <a target="_blank" href={book.formats["application/epub+zip"]}>
          <button>Download ePUB</button>
        </a>
      )}

      <button
        onClick={() => {
          if (!isFav) {
            setIsFav(true);
            addToFav(favouriteBooks, setFavouriteBooks, book);
          } else {
            setIsFav(false);
            removeFromFav(favouriteBooks, setFavouriteBooks, book);
          }
        }}
      >
        {isFav && "Remove from favourites"}
        {!isFav && "Add to favourites"}
      </button>
    </>
  );
}
export default Details;
