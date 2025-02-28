import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ categories }) {
  const testState = { someKey: "someValue" };
  window.history.pushState(testState, "page2.html");

  return (
    <header>
      <Link to={"/"}>
        <h1>Gutenberg oppgave</h1>
      </Link>
      <nav>
        <ul id="categories">
          <Link to={`/favourites`}>Favourites |</Link>
          {categories.map((cat, i) => (
            <li key={i}>
              <Link to={`/category/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
