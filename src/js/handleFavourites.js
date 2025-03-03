export function addToFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks([...favouriteBooks, book]);
}
export function removeFromFav(favouriteBooks, setFavouriteBooks, book) {
  const arr = favouriteBooks.splice();
  console.log(arr);
  setFavouriteBooks([...favouriteBooks, book]);
}
