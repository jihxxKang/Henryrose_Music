import "./Community.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Community() {
  const submenus = [
    ["공지사항", "/community/announcements"],
    ["콩쿠르", "/community/competitions"],
    ["연주회", "/community/concerts"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Community;
