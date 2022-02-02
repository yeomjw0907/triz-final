import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Triz", "Steep", "기술진화법칙"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/메인이미지.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Tirep는</h1>
          <h3>
            <span ref={textRef}></span>을 통해
          </h3>
          <span></span>
          <h3>프로젝트를 진단합니다.</h3>
        </div>
        <a href="#example">
          <img src="assets/down.png" alt="" />{" "}
        </a>
      </div>
    </div>
  );
}
