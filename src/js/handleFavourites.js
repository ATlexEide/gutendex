export function addToFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks([...favouriteBooks, book]);
  localStorage.setItem(
    "favourite_books",
    JSON.stringify([...favouriteBooks, book])
  );
}
export function removeFromFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks(favouriteBooks.filter((_book) => _book.id !== book.id));
  localStorage.setItem(
    "favourite_books",
    JSON.stringify(favouriteBooks.filter((_book) => _book.id !== book.id))
  );
}
