import "./Home.css";
import Header from "./Header";

export default function Home({ cache, categories, setSearchPage }) {
  console.log("Current cache: ", cache);
  return (
    <>
      <Header setSearchPage={setSearchPage} categories={categories} />
      <section id="hero">
        <img src="./book.svg" alt="" />
        <h2>SELECT A CATEGORY OR SEARCH FOR A BOOK</h2>
      </section>
    </>
  );
}
