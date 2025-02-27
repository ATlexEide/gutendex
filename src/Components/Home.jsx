import Header from "./Header";

export default function Home({ cache, categories }) {
  console.log("Current cache: ", cache);
  return (
    <>
      <Header categories={categories} />
    </>
  );
}
