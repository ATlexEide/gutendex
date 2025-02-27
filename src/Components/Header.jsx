import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ categories }) {
  const testState = { someKey: "someValue" };
  window.history.pushState(testState, "page2.html");

  return (
    <header>
      <h1>Gutenberg oppgave</h1>
      <nav>
        <ul id="categories">
          {categories.map((cat, i) => (
            <li key={i}>
              <Link to={`/category/${cat}`} state={testState}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
