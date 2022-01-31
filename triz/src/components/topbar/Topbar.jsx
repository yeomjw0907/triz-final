import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* 26.48 */}
          <a href="#intro" className="logo">
            졸업작품
          </a>
          <div className="itemContainer">
            <span>010-6333-4649</span>
          </div>
          <div className="itemContainer">
            <span>yeomjw0907@naver.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
