import { faLocationDot, faPollH } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faFileVideo,
  faImage,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuickPostComponent = () => {
  return (
    <div>
      <div className="post">
        <div className="img-wrapper-account">
          <img
            src="/src/assets/Kevin Hirwa Nzitatira.jpeg"
            alt="your profile picture"
          />
        </div>
        <div className="post-content">
          <form action="#">
            <input
              type="text"
              name="post-content"
              id="post-input-text"
              placeholder="What is happening?"
            />
            <div className="post-access-submit">
              <div className="accesories">
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faImage} />
                </a>
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faFileVideo} />
                </a>
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faPollH} />
                </a>
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faSmile} />
                </a>
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faCalendar} />
                </a>
                <a href="#" className="post-accesory">
                  <FontAwesomeIcon icon={faLocationDot} />
                </a>
              </div>
              <button
                type="submit"
                className="post-submit-btn btn"
                disabled={5 === Math.round(Math.random()) + 10 ? true : false}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickPostComponent;
