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
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

const SideBar = () => {
  return (
    <>
      <nav>
        <a href="http://">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <ul id="nav-list">
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faBell} />
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faEnvelope} />
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faFileLines} />
              Lists
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faUserGroup} />
              Communities
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faXTwitter} />
              Premium
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faUser} />
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <FontAwesomeIcon icon={faEllipsis} />
              More
            </a>
          </li>
        </ul>
        <div id="cta">
          <a href="http://" className="compose-tweet-btn">
            Post
          </a>
        </div>
        <div id="account">
          <img
            src="/src/assets/kevinhirwanzitatira-white.svg"
            alt="your profile picture"
          />
          <div id="name-username">
            <h3 className="username">hirwaNKevin</h3>
            <p className="name">@kevinHirwaN</p>
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
