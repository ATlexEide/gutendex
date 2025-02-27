export default function Favourites({ favouriteBooks }) {
  console.log(favouriteBooks);
  return (
    <>
      <h1>Favourites</h1>
      <ul>
        {favouriteBooks &&
          favouriteBooks.map((book, i) => <li key={i}>{book.title}</li>)}
      </ul>
    </>
  );
}
