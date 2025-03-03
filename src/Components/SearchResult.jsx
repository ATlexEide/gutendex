import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

export default function Category({ categories }) {
  console.clear();
  const { id } = useParams();
  console.log("Search: ", id);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Loading: ", isLoading);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(results.page ? results.page : 1);

  const url = `https://gutendex.com/books?search=dickens%20great`;
  console.log("results: ", results);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setResults({ ...results, [`page`]: page, ["books"]: res });
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [page, results, id, url]);

  return (
    <>
      <Header categories={categories} />
      <h1>{id}</h1>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {results.books && (
        <>
          <ul>
            {results.books.results.map((book, i) => (
              <li key={i}>
                <Link to={`/details/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>

          <div id="pagination">
            {!results.books.previous && <button disabled>Previous</button>}
            {results.books.previous && (
              <button
                onClick={() => {
                  setPage(page - 1);
                  setIsLoading(true);
                  setResults({ ...results, ["page"]: undefined });
                }}
              >
                Previous
              </button>
            )}
            <button>{results.page}</button>
            {!results.books.next && <button disabled>Next</button>}
            {results.books.next && (
              <button
                onClick={() => {
                  setPage(page + 1);
                  setIsLoading(true);
                  setResults({ ...results, ["page"]: undefined });
                }}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

// `https://gutendex.com/books?topic=${id}`
