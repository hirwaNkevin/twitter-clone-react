import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  name: string;
}

const NavLinkComponent = (props: Props) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        <span className="link-icon">{props.icon}</span>
        <span className="link-name">{props.name}</span>
      </a>
    </li>
  );
};

export default NavLinkComponent;
