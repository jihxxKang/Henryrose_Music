import "./Teacher.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Teacher() {
  const submenus = [
    ["입사지원안내", "/teacher/teacher_info"],
    ["입사지원서 제출", "/teacher/teacher_apply"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Teacher;
