import "./Header.css";
import logo from "../img/logo_white.png";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    backgroundColor: isActive ? "#9b2122" : "#262626",
  };
}

function Header() {
  return (
    <div className="Header">
      <div className="logo_div">
        <Link to="/">
          <img className="logo_img" src={logo} alt=""></img>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/introduction/ceo_hello" style={getLinkStyle}>
            회사소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/programs" style={getLinkStyle}>
            프로그램
          </NavLink>
        </li>
        <li>
          <NavLink to="/lesson" style={getLinkStyle}>
            레슨문의
          </NavLink>
        </li>
        <li>
          <NavLink to="/branch" style={getLinkStyle}>
            지사개설
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher" style={getLinkStyle}>
            교사지원
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" style={getLinkStyle}>
            커뮤니티
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
