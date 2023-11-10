import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessagingComponent = () => {
  return (
    <>
      <nav id="messages-nav">
        <h2>Messages</h2>
        <ul id="messages-nav-controls">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MessagingComponent;
