import Header from "./Header";

export default function Favourites({ categories, favouriteBooks }) {
  console.log(favouriteBooks);
  return (
    <>
      <Header categories={categories} />
      <h1>Favourites</h1>
      <ul>
        {favouriteBooks &&
          favouriteBooks.map((book, i) => <li key={i}>{book.title}</li>)}
      </ul>
    </>
  );
}
