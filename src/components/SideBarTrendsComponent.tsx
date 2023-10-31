import {
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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
        <div id="live-on-x">
          <h2>Live On X</h2>
        </div>
        <div id="trends-for-you">
          <h2>Trends for you</h2>
          <Trend />
          <Trend />
          <Trend />
        </div>
        <div id="who-to-follow">
          <h2>Who to Follow</h2>
          <div className="accounts-to-follow">
          <AccountToFolow />
          <AccountToFolow />
          <AccountToFolow />
          <AccountToFolow />
          </div>
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

const Trend = () => {
  return (
    <>
      <div className="trend">
        <div className="category-wrp">
          <div className="category">
            <span className="category-name">
              Technology <span>&bull;</span>Trending
            </span>
          </div>
          <span>
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
        </div>
        <div className="trend-name">Vercel</div>
        <div className="post-number">
          <span className="post-number-count">3,443</span> posts
        </div>
      </div>
    </>
  );
};

const AccountToFolow = () => {
  return (
    <a href="#">
      <div className="account">
        <div className="img-wrapper">
          <img
            src="/src/assets/Kevin Hirwa Nzitatira.jpeg"
            alt="profile of Kevin"
          />
        </div>
        <div className="account-info">
          <h3 className="username-who_to_follow">Kevin Hirwa</h3>
          <p className="name-who_to_follow">@HirwaNkevin</p>
        </div>
      </div>
      <div className="follow-btn-wrapper-who_to_follow">
        <button className="follow-btn-who_to_follow">Follow</button>
      </div>
    </a>
  );
};

export default SideBarTrendsComponent;
