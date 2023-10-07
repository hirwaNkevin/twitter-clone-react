const SideBar = () => {
  return (
    <>
      <nav>
        <a href="http://">
          <img
            src="/src/assets/twitter-clone-logo.png"
            alt="twitter clone logo"
          />
        </a>
        <ul id="nav-list">
          <li className="nav-item">
            <a href="" className="navlink">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Lists
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Communities
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Premium
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
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
            src="/src/assets/twitter-clone-logo.png"
            alt="your profile picture"
          />
          <div id="name-username">
            <h3 className="username">hirwaNKevin</h3>
            <p className="name">@kevinHirwaN</p>
          </div>
          <div id="account-more">...</div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
