import "./Lesson.css";
import Submenubar from "../../Components/Submenubar";
import { Outlet } from "react-router-dom";

function Lesson() {
  const submenus = [
    ["레슨안내", "/lesson/lesson_info"],
    ["샘플레슨 신청", "/lesson/sample_lesson"],
  ];
  return (
    <>
      <Submenubar submenus={submenus} />
      <Outlet />
    </>
  );
}

export default Lesson;
