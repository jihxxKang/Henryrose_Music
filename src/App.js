import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//
import Home from "./Pages/Home";
//
import Introduction from "./Pages/Introduction/Introduction";
import CeoHello from "./Pages/Introduction/CeoHello";
import CompanyIntro from "./Pages/Introduction/CompanyIntro";
//
import Programs from "./Pages/Programs/Programs";
import Lesson from "./Pages/Lesson/Lesson";
import Branch from "./Pages/Branch/Branch";
import Teacher from "./Pages/Teacher/Teacher";
import Community from "./Pages/Community/Community";

//

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
          <Route path="programs" element={<Programs />} />
          <Route path="lesson" element={<Lesson />} />
          <Route path="branch" element={<Branch />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </div>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
