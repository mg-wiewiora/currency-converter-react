import "./style.css";
import Time from "./Time";

const Header = ({ title }) => (
  <header className="header">
    <Time />
    <h1 className="header__title">{title}</h1>
  </header>
);
export default Header;
