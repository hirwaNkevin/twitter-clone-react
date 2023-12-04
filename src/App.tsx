import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./components/NavLinkComponent";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div id="wrapper" className="container sm:container mx-auto">
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
              name="Search"
              icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
            <NavLink
              name="Communities"
              icon={<FontAwesomeIcon icon={faHome} />}
            />
            <NavLink name="Home" icon={<FontAwesomeIcon icon={faHome} />} />
          </ul>
        </nav>
      </header>
      <main>main</main>
    </div>
  );
}

export default App;
