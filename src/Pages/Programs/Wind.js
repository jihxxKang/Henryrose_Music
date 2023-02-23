import "./Wind.css";
import flute from "../../img/flute.jpg";
import clarinet from "../../img/clarinet.jpg";
import trumpet from "../../img/trumpet.jpg";

function Wind() {
  return (
    <div className="Wind">
      {/* */}
      <br></br>
      <img src={flute} />
      <h2>플루트</h2>
      <ul>
        <br></br>
        <li>오케스트라 내 목관악기 중 유일하게 리드가 없는 악기</li>
        <br></br>
        <li>
          부드럽고 우아한 고음이 나는 플루트는 오케스트라에서 중요한 선율학기
        </li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={clarinet} />
      <h2>클라리넷</h2>
      <ul>
        <br></br>
        <li>음역의 폭이 넓고 리드의 진동을 통해 소리를 냄</li>
        <br></br>
        <li>크기와 음역에 따라 다양한 종류의 클라리넷</li>
      </ul>
      {/* */}
      <br></br>
      <br></br>
      <br></br>
      <img src={trumpet} />
      <h2>트럼펫</h2>
      <ul>
        <br></br>
        <li>화려하고 밝은 음색을 지닌 금관악기</li>
        <br></br>
        <li>
          다른 금관악기들과 마찬가지로 마우스피스에 입을 대고 불어 관내의 공기를
          진동시켜 소리를 냄
        </li>
        <br></br>
        <li>관의 길이와 모양에 따라 종류가 매우 다양</li>
      </ul>
    </div>
  );
}

export default Wind;
