import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Category({ cache, setCache }) {
  console.clear();
  const { id } = useParams();
  console.log("Category: ", id);
  console.log("Current cache: ", cache);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(
    cache[`${id}_page`] ? cache[`${id}_page`] : 1
  );

  const url = `https://gutendex.com/books/?page=${page}&topic=${id}`;
  // const url = `https://ponyapi.net/v1/character/all`;

  console.log(cache[id], Boolean(cache[id]));
  useEffect(() => {
    if (!cache[id]) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setCache({ ...cache, [`${id}_page`]: page, [id]: res.results });
          console.log("Updated cache: ", cache);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    } else {
      setIsLoading(false);
    }
  }, [page]);

  return (
    <>
      <h1>{id}</h1>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {cache[id] && (
        <>
          <ul>
            {cache[id].map((book, i) => (
              <li key={i}>
                <Link to={`/details/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => {
                if (page - 1 === 0) return;
                setPage(page - 1);
                setIsLoading(true);
                setCache({ ...cache, [id]: undefined });
              }}
            >
              Previous
            </button>
            <button>{page}</button>
            <button
              onClick={() => {
                setPage(page + 1);
                setIsLoading(true);
                setCache({ ...cache, [id]: undefined });
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

// `https://gutendex.com/books?topic=${id}`
