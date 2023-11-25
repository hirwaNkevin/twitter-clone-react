import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./components/NavLinkComponent";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div id="wrapper" className="sm:container">
      <header>
        <div id="logo">
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <nav>
          <ul>
            <NavLink name="Home" icon={<FontAwesomeIcon icon={faHome} />} />
            <NavLink
              name="Explore"
              icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
          </ul>
        </nav>
      </header>
      <main>main</main>
    </div>
  );
}

export default App;
