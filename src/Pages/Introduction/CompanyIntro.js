import "./CompanyIntro.css";
import piano2 from "../../img/piano2.jpg";
import trumpet from "../../img/trumpet.jpg";
import concert from "../../img/concert.jpg";

function CompanyIntro() {
  return (
    <div className="CompanyIntro">
      <h1>
        "헨리로즈뮤직은 레슨, 콩쿠르, 연주회 등 다양한 프로그램을 제공합니다."
      </h1>
      {/* */}
      <br></br>
      <img src={piano2} alt="" />
      <h2>레슨</h2>
      <ul>
        <br></br>
        <li>헨리로즈뮤직의 검증된 우수한 교육콘텐츠로 진행되는 레슨</li>
        <br></br>
        <li>
          악기를 처음 접하는 유아부터 인생 제 2막의 새로운 도전을 하는
          시니어까지 맞춤형 교육
        </li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={trumpet} alt="" />
      <h2>콩쿠르</h2>
      <ul>
        <br></br>
        <li>온라인, 오프라인으로 진행되는 헨리로즈뮤직 콩쿠르</li>
        <br></br>
        <li>피아노, 성악, 관현악 등 모두 참여 가능</li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={concert} alt="" />
      <h2>연주회</h2>
      <ul>
        <br></br>
        <li>정기적으로 진행되는 헨리로즈뮤직 연주회</li>
        <br></br>
        <li>실력향상과 함께 특별한 경험</li>
      </ul>
    </div>
  );
}

export default CompanyIntro;

/*
<h1>
"헨리로즈뮤직은 레슨, 콩쿠르, 연주회 등 다양한 프로그램을 제공합니다."
</h1>
<img src={piano2} />
<h1>레슨</h1>
<h3>헨리로즈뮤직의 검증된 우수한 교육콘텐츠로 진행되는 레슨</h3>
<h3>
악기를 처음 접하는 유아부터 인생 제 2막의 새로운 도전을 하는 시니어까지
맞춤형 교육
</h3>
<img src={flute} />
<h1>콩쿠르</h1>
<h3>온라인, 오프라인으로 진행되는 피아노, 성악, 관현악 콩쿠르</h3>
<img src={concert} />
<h1>연주회</h1>
<h3>헨리로즈뮤직 연주회를 참가함으로 실력향상과 함께 특별한 경험</h3>
*/
