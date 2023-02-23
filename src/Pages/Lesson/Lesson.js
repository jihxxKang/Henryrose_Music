import "./Lesson.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Lesson() {
  const submenus = [
    ["레슨안내", "/lesson/lesson_info"],
    ["샘플레슨 신청", "/lesson/sample_lesson"],
  ];
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/lesson/lesson_info");
  });
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Lesson;
