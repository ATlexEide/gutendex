export default function Favourites({ favouriteBooks }) {
  return (
    <>
      <h1>Favourites</h1>
      <ul>
        {favouriteBooks.map((book, i) => (
          <li key={i}>{book.title}</li>
        ))}
      </ul>
    </>
  );
}
