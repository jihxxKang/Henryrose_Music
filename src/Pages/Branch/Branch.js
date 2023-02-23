import "./Branch.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Branch() {
  const submenus = [
    ["지사개설안내", "/branch/branch_info"],
    ["지사개설문의", "/branch/branch_inquiry"],
  ];

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/branch/branch_info");
  }, []);

  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Branch;
