import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Category({ cache, setCache }) {
  console.clear();
  const { id } = useParams();
  console.log("Category: ", id);
  console.log("Current cache: ", cache);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://gutendex.com/books?topic=${id}`;
  // const url = `https://ponyapi.net/v1/character/all`;

  useEffect(() => {
    if (!cache[id]) {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setCache({ ...cache, [id]: res.results });
          console.log("Updated cache: ", cache);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      <h1>{id}</h1>
      {isLoading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {cache[id] && (
        <ul>
          {cache[id].map((book, i) => (
            <li key={i}>{book.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

// `https://gutendex.com/books?topic=${id}`
