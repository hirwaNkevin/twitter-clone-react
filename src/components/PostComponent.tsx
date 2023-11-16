import {
  faCheckCircle,
  faRepeat,
  faChartBar,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostComponent = () => {
  return (
    <>
      <a href="#" className="post">
        <div className="img-wrapper-account">
          <img
            src="/src/assets/Kevin Hirwa Nzitatira.jpeg"
            alt="your profile picture"
          />
        </div>
        <div className="post-content">
          <div className="post-info">
            <div className="user-info">
              <div className="username-name">
                <span className="username">hirwaNKevin</span>
                <span className="verification">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="name">@kevinHirwaN</span>
              </div>
            </div>
            <div className="separator">&bull;</div>
            <div className="eta">4m</div>
          </div>
          <div className="post-content-inner">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            possimus beatae facere deleniti et.
          </div>
          <ul className="post-controls">
            <li className="ctlr ctlr-comment">
              <FontAwesomeIcon icon={faCommentAlt} />
              <span className="ctlr-count">5</span>
            </li>
            <li className="ctlr ctlr-repost">
              <FontAwesomeIcon icon={faRepeat} />
              <span className="ctlr-count">5</span>
            </li>
            <li className="ctlr ctlr-like">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ctlr-count">5</span>
            </li>
            <li className="ctlr ctlr-views">
              <FontAwesomeIcon icon={faChartBar} />
              <span className="ctlr-count">5</span>
            </li>
            <li className="ctlr ctlr-share">
              <FontAwesomeIcon icon={faUpload} />
              <span className="ctlr-count">5</span>
            </li>
          </ul>
        </div>
      </a>
    </>
  );
};

export default PostComponent;
