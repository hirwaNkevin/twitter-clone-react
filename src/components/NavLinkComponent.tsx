import { ReactNode } from "react";
import "../css/navlink.css";

interface Props {
  icon: ReactNode;
  name: string;
}

const NavLinkComponent = (props: Props) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        <div className="link-inner">
          <span className="link-icon">{props.icon}</span>
          <span className="link-name">{props.name}</span>
        </div>
      </a>
    </li>
  );
};

export default NavLinkComponent;
