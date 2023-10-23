// import {
//   faCheckCircle,
//   faRepeat,
//   faChartBar,
//   faUpload,
// } from "@fortawesome/free-solid-svg-icons";

// import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <input type="text" name="post-content" id="post-input" />
            <div className="flex">
              <div className="accesories"></div>
              <button type="submit" className="post-submit-btn">
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
