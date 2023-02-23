import "./Programs.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Programs() {
  const submenus = [
    ["피아노", "/programs/piano"],
    ["현악기", "/programs/strings"],
    ["관악기", "/programs/wind"],
    ["성악", "/programs/vocal"],
    ["입시레슨", "/programs/entrance"],
  ];
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/programs/piano");
  });
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Programs;
