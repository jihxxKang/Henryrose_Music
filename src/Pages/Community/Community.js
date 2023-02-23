import "./Community.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Community() {
  const submenus = [
    ["공지사항", "/community/announcements"],
    ["콩쿠르", "/community/competitions"],
    ["연주회", "/community/concerts"],
  ];
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/community/announcements");
  });

  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Community;
