import "./Entrance.css";
import graduation from "../../img/graduation.jpg";

function Entrance() {
  return (
    <div className="Entrance">
      <br></br>
      <img src={graduation} alt="" />
      <h2>입시레슨</h2>
      <ul>
        <br></br>
        <li>우수한 교수진</li>
        <br></br>
        <li>풍부하고 체계적인 교육 시스템</li>
        <br></br>
        <li>충분한 무대연습, 피드백</li>
      </ul>
      <h1 id="together">음악대학 입시준비는 헨리로즈뮤직과 함께하세요</h1>
    </div>
  );
}

export default Entrance;
