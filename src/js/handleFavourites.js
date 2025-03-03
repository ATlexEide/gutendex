export function addToFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks([...favouriteBooks, book]);
}
export function removeFromFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks(favouriteBooks.filter((_book) => _book.id !== book.id));
}
