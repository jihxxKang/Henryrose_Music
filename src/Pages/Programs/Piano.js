import "./Piano.css";
import piano2 from "../../img/piano2.jpg";

function Piano() {
  return (
    <div className="Piano">
      <br></br>
      <img src={piano2} />
      <h2>피아노</h2>
      <ul>
        <br></br>
        <li>
          <h3>두뇌 발달</h3>
          <p>
            사고와 관련된 뇌의 하드웨어 부분을 발달시켜주기 때문에 수학에서
            사용하는 개념들을 이해하는 것과 접목시킬 수 있으며 이는 곡을
            분석하고 손가락을 통해 표현하기 때문.
          </p>
        </li>
        <li>
          <h3>소근육 발달</h3>
          <p>
            사고와 관련된 뇌의 하드웨어 부분을 발달시켜주기 때문에 수학에서
            사용하는 개념들을 이해하는 것과 접목시킬 수 있으며 이는 곡을
            분석하고 손가락을 통해 표현하기 때문.
          </p>
        </li>
        <li>
          <h3>평생 취미</h3>
          <p>
            가장 보편화되어있는 악기로 언제든 연주 가능. 어렸을 때 접할수록 공감
            형성, 정서적 유대감 증폭
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Piano;
