import "./Teacher.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Teacher() {
  const submenus = [
    ["입사지원안내", "/teacher/teacher_info"],
    ["입사지원서 제출", "/teacher/teacher_apply"],
  ];
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/teacher/teacher_info");
  });
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Teacher;
