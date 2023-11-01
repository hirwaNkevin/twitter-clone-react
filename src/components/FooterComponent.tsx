import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
        <li>
          <a href="#">Accessibility</a>
        </li>
        <li>
          <a href="#">Ads info</a>
        </li>
        <li>
          <a href="#">More</a>
          <FontAwesomeIcon icon={faEllipsis} />
        </li>
        <li>&copy; 2023 X Corp.</li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
