import "./TeacherApply.css";

function TeacherApply() {
  return (
    <div className="TeacherApply">
      <br></br>
      <br></br>
      <br></br>
      <textarea cols="50" rows="10"></textarea>
      <br></br>
      <button>신청하기</button>
      <p>1. [신청하기] 누르면 바로 이메일 전송되도록</p>
      <p>2. 입력창 항목 별로 여러개 만들기 (이름, 연락처 등등)</p>
      <p>3. 개인정보 수집 및 이용 동의</p>
    </div>
  );
}

export default TeacherApply;
