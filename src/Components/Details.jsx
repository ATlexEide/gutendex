import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Details({ categories }) {
  const [book, setBook] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((res) => setBook(res));
  }, [id]);
  console.log(book);
  return (
    <>
      <Header categories={categories} />
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

      <button>Add to favourites</button>
    </>
  );
}
export default Details;
