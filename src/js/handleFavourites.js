export function addToFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks([...favouriteBooks, book]);
}
export function removeFromFav(favouriteBooks, setFavouriteBooks, book) {
  console.log(book);
  console.log("favs", favouriteBooks);
  setFavouriteBooks(favouriteBooks.filter((_book) => _book.id !== book.id));
  console.log("favs updated", favouriteBooks);
}
