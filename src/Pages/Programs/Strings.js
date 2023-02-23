import "./Strings.css";
import violin2 from "../../img/violin2.jpg";
import viola from "../../img/viola.jpg";
import cello from "../../img/cello.jpg";

function Strings() {
  return (
    <div className="Strings">
      {/* */}
      <br></br>
      <img src={violin2} alt="" />
      <h2>바이올린</h2>
      <ul>
        <br></br>
        <li>
          현악기(바이올린, 비올라, 첼로, 콘트라베이스) 중 가장 높은 음역대의
          소리
        </li>
        <br></br>
        <li>오케스트라에서 가장 많은 수를 차지하여 주도적 역할 담당</li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={viola} alt="" />
      <h2>비올라</h2>
      <ul>
        <br></br>
        <li>바이올린보다 크기가 크고 낮은 소리를 내지만 연주 자세는 비슷</li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={cello} alt="" />
      <h2>첼로</h2>
      <ul>
        <br></br>
        <li>오케스트라에서 콘트라베이스 다음으로 낮은 음역대인 악기</li>
        <br></br>
        <li>비올라보다 한 옥타브 아래음을 연주</li>
      </ul>
    </div>
  );
}

export default Strings;
