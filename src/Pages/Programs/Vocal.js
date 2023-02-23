import "./Vocal.css";
import chorus from "../../img/chorus.jpg";

function Vocal() {
  return (
    <div className="Vocal">
      <br></br>
      <img src={chorus} alt="" />
      <h2>성악</h2>
      <ul>
        <br></br>
        <li>음역대는 크게 소프라노, 알토, 테너, 베이스로 나뉨</li>
        <br></br>
        <li>
          미취학 아동부터 시니어까지 연령, 배움 목적에 따라 동요, 뮤지컬,
          성악으로 나뉨
        </li>
      </ul>
    </div>
  );
}

export default Vocal;
