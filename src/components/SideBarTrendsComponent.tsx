import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBarTrendsComponent = () => {
  return (
    <>
      <Search />
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
