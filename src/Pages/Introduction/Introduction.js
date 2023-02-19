import "./Introduction.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Introduction() {
  const submenus = [
    ["CEO 인사말", "/introduction/ceo_hello/"],
    ["회사소개", "/introduction/company_intro/"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Introduction;
