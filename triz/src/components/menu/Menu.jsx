import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#example">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#step1">Step1</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#step2">Step2</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#step3">Step3</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
