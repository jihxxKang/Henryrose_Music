import "./LessonInfo.css";
import table from "../../img/hand_table.jpg";

function LessonInfo() {
  return (
    <div className="LessonInfo">
      <img src={table} alt="" />
      <ul>
        <br></br>
        <li>
          관악: 플루트, 클라리넷, 오보에, 바순, 트럼펫, 트럼본, 호른, 색소폰
        </li>
        <br></br>
        <li>현악: 바이올린, 비올라, 첼로, 더블 비이스, 기타</li>
        <br></br>
        <li>국악: 가야금, 거문고, 대금, 소금, 피리, 해금, 장구</li>
        <br></br>
        <li>특강: 리코더, 단소, 오카리나, 칼림바, 우쿨렐레</li>
      </ul>
      <h1 id="together">피아노 외 악기, 특강 레슨은 문의 바랍니다</h1>
    </div>
  );
}

export default LessonInfo;
