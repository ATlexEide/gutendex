import "./Category.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Throbber from "./Throbber";
export default function Category({
  categories,
  cache,
  setCache,
  setSearchPage,
}) {
  console.clear();
  const { id } = useParams();
  console.log("Category: ", id);
  console.log("Current cache: ", cache);
  const [isLoading, setIsLoading] = useState(true);
  console.log("Loading: ", isLoading);
  const [page, setPage] = useState(
    cache[`${id}_page`] ? cache[`${id}_page`] : 1
  );

  const url = `https://gutendex.com/books/?page=${page}&topic=${id}`;
  // const url = `https://ponyapi.net/v1/character/all`;

  console.log(cache[id], Boolean(cache[id]));
  useEffect(() => {
    if (!cache[id]) {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setCache({ ...cache, [`${id}_page`]: page, [id]: res });
          console.log("Updated cache: ", cache);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    } else {
      setIsLoading(false);
    }
  }, [page, cache, id, setCache, url]);

  return (
    <>
      <Header setSearchPage={setSearchPage} categories={categories} />
      {isLoading && <Throbber />}
      {cache[id] && (
        <section id="category-container">
          <h1 id="category-title">{id}</h1>
          <ul>
            {cache[id].results.map((book, i) => (
              <li key={i}>
                <Link to={`/details/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>

          <div id="pagination">
            {!cache[id].previous && <button disabled>Previous</button>}
            {cache[id].previous && (
              <button
                onClick={() => {
                  setPage(page - 1);
                  setIsLoading(true);
                  setCache({ ...cache, [id]: undefined });
                }}
              >
                Previous
              </button>
            )}
            <button id="current-page">{cache[`${id}_page`]}</button>
            {!cache[id].next && <button disabled>Next</button>}
            {cache[id].next && (
              <button
                onClick={() => {
                  setPage(page + 1);
                  setIsLoading(true);
                  setCache({ ...cache, [id]: undefined });
                }}
              >
                Next
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}

// `https://gutendex.com/books?topic=${id}`
