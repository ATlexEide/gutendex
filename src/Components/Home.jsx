import Header from "./Header";

export default function Home({ cache, categories, setSearchPage }) {
  console.log("Current cache: ", cache);
  return (
    <>
      <Header setSearchPage={setSearchPage} categories={categories} />
    </>
  );
}
