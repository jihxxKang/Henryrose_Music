import "./CeoHello.css";
import ceo_hello_edu from "../../img/ceo_hello_edu.jpg";

function CeoHello() {
  return (
    <div className="CeoHello">
      <h1>
        "음악은 단순한 선택교육이 아닌 우리 아이의 잠재된 능력을 발견하는
        필수과정입니다."
      </h1>
      <br></br>
      <img src={ceo_hello_edu} />
      <ul>
        <br></br>
        <li>
          헨리로즈 뮤직은 최신 트렌드 및 검증된 우수한 교육 컨텐츠만을
          제공함으로써 아이들의 창조력, 지구력을 강화시키는 자기주도형 학습을
          목표로 합니다.
        </li>
        <br></br>
        <li>
          헨리로즈 아카데미에서 실시하는 전문교수과정을 수료한 검증된 교사로
          이루어졌으며 학습자 개개인의 특성을 고려한 1:1 맞춤형 프로그램을
          제공합니다.
        </li>
      </ul>
    </div>
  );
}

export default CeoHello;
