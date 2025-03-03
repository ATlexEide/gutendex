export function addToFav(favouriteBooks, setFavouriteBooks, book) {
  setFavouriteBooks([...favouriteBooks, book]);
}
export function removeFromFav(favouriteBooks, setFavouriteBooks, book) {
  console.log("favs", favouriteBooks);
  const arr = favouriteBooks.filter((_book) => (_book !== book ? book : null));
  console.log("new arr", arr);
  setFavouriteBooks([arr]);
}
