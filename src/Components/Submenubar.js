import "./Submenubar.css";
import { NavLink } from "react-router-dom";

/*function getLinkStyle({ isActive }) {
  return {
    backgroundColor: isActive ? "pink" : "gray",
  };
}*/

function Submenubar({ submenus }) {
  return (
    <div className="Submenubar">
      <ul>
        {submenus.map((submenu) => (
          <li>
            <NavLink
              to={submenu[1]}
              className={({ isActive }) => (isActive ? "pink" : "gray")}
            >
              {submenu[0]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submenubar;
