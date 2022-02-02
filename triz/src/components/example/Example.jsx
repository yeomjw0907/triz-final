import "./example.scss";

export default function Example() {
  return (
    <div className="example" id="example">
      <div className="left">
        <div className="wrapper">
          <h1>왜 Triep인가</h1>
          <h3>
            Triep는 기존 주관적이었던 R&D 방법론의 객관성을 높이고, 시간 효율을
            높혔습니다.
          </h3>
          <span></span>
          <h3>지금 바로 본인의 프로젝트를 진단해보세요!</h3>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/방법론 분석.png" alt="" />
        </div>
      </div>
    </div>
  );
}
