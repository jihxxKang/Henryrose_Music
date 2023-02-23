import "./TeacherInfo.css";
import cello_teaching from "../../img/cello_teaching.jpg";

function TeacherInfo() {
  return (
    <div className="TeacherInfo">
      <br></br>
      <h1 className="bar">헨리로즈뮤직 교사</h1>
      <img src={cello_teaching} alt="Cello Teaching" />
      <h2>
        체계적인 회사관리, 레슨에만 집중하실 수 있는 환경, 업계 가장 높은 대우를
        받습니다.
      </h2>
      <h1 className="bar">채용분야</h1>
      <h2>피아노, 바이올린, 첼로, 플루트, 성악, 통기타</h2>
      <h1 className="bar">지원자격</h1>
      <h2>대학교 음악 관련 학과 재학생(졸업예정) 및 졸업생</h2>
      <h1 className="bar">모집기간</h1>
      <h2>상시채용</h2>
      <h1 className="bar">지원절차</h1>
      <h2>
        서류접수 -> 서류심사 -> 면접 -> 합격통보 -> 전문교사교육 -> 전문교사활동
      </h2>
      <h1 className="bar">지원방법</h1>
    </div>
  );
}

export default TeacherInfo;
