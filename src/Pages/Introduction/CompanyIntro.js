import "./CompanyIntro.css";
import piano from "../../img/piano.jpg";

function CompanyIntro() {
  return (
    <div className="CompanyIntro">
      <br></br>
      <h1>헨리로즈뮤직 소개</h1>
      <h2>
        헨리로즈뮤직은 레슨, 콩쿠르, 연주회 등 다양한 프로그램을 제공합니다.
      </h2>
      <img src={piano} />
    </div>
  );
}

export default CompanyIntro;
