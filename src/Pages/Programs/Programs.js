import "./Programs.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Programs() {
  const submenus = [
    ["피아노", "/programs/piano"],
    ["현악기", "/programs/strings"],
    ["관악기", "/programs/wind"],
    ["성악", "/programs/vocal"],
    ["입시레슨", "/programs/entrance"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Programs;
