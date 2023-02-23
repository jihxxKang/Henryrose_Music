import "./Branch.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Branch() {
  const submenus = [
    ["지사개설안내", "/branch/branch_info"],
    ["지사개설문의", "/branch/branch_inquiry"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Branch;
