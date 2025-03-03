import Header from "./Header";

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
          favouriteBooks.map((book, i) => <li key={i}>{book.title}</li>)}
      </ul>
    </>
  );
}
