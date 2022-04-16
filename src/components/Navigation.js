import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BsList,
  BsXLg,
} from "react-icons/bs";
import "./Navigation.css";
import MenuData from "../data/MenuData";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <aside>
      <div className="navbar">
        <div className="nabar-toggle">
          <Link to="#" className="menu-bar" onClick={toggleMenu} >
            <BsList/>
          </Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-close">
            <Link to="#" className="menu-close" onClick={toggleMenu}>
                <BsXLg />
            </Link>
        </div>
        <ul className="nav-menu-item" onClick={toggleMenu}>
          {MenuData.map((e, index) => {
            return (
              <li className="menu-text" key={index}>
                <Link to={e.path}>
                  {e.icon}
                  <span>{e.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Navigation;
