import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//홈
import Home from "./Pages/Home";
//회사소개 done
import Introduction from "./Pages/Introduction/Introduction";
import CeoHello from "./Pages/Introduction/CeoHello";
import CompanyIntro from "./Pages/Introduction/CompanyIntro";
//프로그램 done
import Programs from "./Pages/Programs/Programs";
import Piano from "./Pages/Programs/Piano";
import Strings from "./Pages/Programs/Strings";
import Wind from "./Pages/Programs/Wind";
import Vocal from "./Pages/Programs/Vocal";
import Entrance from "./Pages/Programs/Entrance";
//레슨문의 done
import Lesson from "./Pages/Lesson/Lesson";
import LessonInfo from "./Pages/Lesson/LessonInfo";
import SampleLesson from "./Pages/Lesson/SampleLesson";
//지사개설
import Branch from "./Pages/Branch/Branch";
//교사지원 done
import Teacher from "./Pages/Teacher/Teacher";
import TeacherInfo from "./Pages/Teacher/TeacherInfo";
import TeacherApply from "./Pages/Teacher/TeacherApply";
//커뮤니티
import Community from "./Pages/Community/Community";
import Announcements from "./Pages/Community/Announcements";
import Competitions from "./Pages/Community/Competitions";
import Concerts from "./Pages/Community/Concerts";
import BranchInfo from "./Pages/Branch/BranchInfo";
import BranchInquiry from "./Pages/Branch/BranchInquiry";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="routes_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="introduction" element={<Introduction />}>
            <Route path="ceo_hello" element={<CeoHello />} />
            <Route path="company_intro" element={<CompanyIntro />} />
          </Route>
          <Route path="programs" element={<Programs />}>
            <Route path="piano" element={<Piano />} />
            <Route path="strings" element={<Strings />} />
            <Route path="wind" element={<Wind />} />
            <Route path="vocal" element={<Vocal />} />
            <Route path="entrance" element={<Entrance />} />
          </Route>
          <Route path="lesson" element={<Lesson />}>
            <Route path="lesson_info" element={<LessonInfo />} />
            <Route path="sample_lesson" element={<SampleLesson />} />
          </Route>
          <Route path="branch" element={<Branch />}>
            <Route path="branch_info" element={<BranchInfo />} />
            <Route path="branch_inquiry" element={<BranchInquiry />} />
          </Route>
          <Route path="teacher" element={<Teacher />}>
            <Route path="teacher_info" element={<TeacherInfo />} />
            <Route path="teacher_apply" element={<TeacherApply />} />
          </Route>
          <Route path="community" element={<Community />}>
            <Route path="announcements" element={<Announcements />} />
            <Route path="competitions" element={<Competitions />} />
            <Route path="concerts" element={<Concerts />} />
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
