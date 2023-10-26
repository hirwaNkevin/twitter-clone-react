import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBarTrendsComponent = () => {
  return (
    <>
      <div id="search-wrapper">
        <Search />
      </div>
      <div id="aside-comps">
        <div id="subscribe-premium">
          <h2>Subscribe to Premium</h2>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue
          </p>
          <a href="#" className="btn">
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
};

const Search = () => {
  return (
    <>
      <form action="#" id="search-form">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" name="search" id="search" placeholder="Search" />
      </form>
    </>
  );
};

export default SideBarTrendsComponent;
