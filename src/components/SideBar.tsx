import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faMagnifyingGlass,
  faUserGroup,
  faEllipsis,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

const SideBar = () => {
  return (
    <>
      <nav id="sidebar">
        <a href="http://" id="logo">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <ul id="nav-list">
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faHome} />{" "}
              <span className="sidebar-link-content">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="sidebar-link-content">Explore</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faBell} />
              <span className="sidebar-link-content">Notifications</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="sidebar-link-content">Messages</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faFileLines} />
              <span className="sidebar-link-content">Lists</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faUserGroup} />
              <span className="sidebar-link-content">Communities</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faXTwitter} />
              <span className="sidebar-link-content">Premium</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faUser} />
              <span className="sidebar-link-content">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink" id="more-icon">
              <FontAwesomeIcon icon={faEllipsis} />
              <span className="sidebar-link-content">More</span>
            </a>
          </li>
        </ul>
        <div id="cta">
          <a href="http://" className="compose-tweet-btn">
            {window.innerWidth > 800 ? (
              <span className="">Post</span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faFeather} />
              </span>
            )}
          </a>
        </div>
        <div id="account">
          <div id="profile">
            <div id="img-wrapper-account">
              <img
                src="/src/assets/Kevin Hirwa Nzitatira.jpeg"
                alt="your profile picture"
              />
            </div>
            <div id="name-username">
              <h3 className="username">hirwaNKevin</h3>
              <p className="name">@kevinHirwaN</p>
            </div>
          </div>
          <div id="account-more">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
