import "./step2.scss";

export default function Step2() {
  return (
    <div className="step2" id="step2">
      <div className="left">
        <div className="wrapper">
          <h1>
            step2. excel파일에 결과 값을 넣고 다음과 같은 그래프를 그려내야
            합니다.
          </h1>
          <a href="step2excel.xlsx" download>
            엑셀 파일 다운로드 받기
          </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/진화법칙 예제.png" alt="" />
        </div>
      </div>
    </div>
  );
}
