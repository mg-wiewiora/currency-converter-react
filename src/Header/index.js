
import Time from "./Time";
import { Title } from "./styled";

const Header = ({ title }) => (
  <header>
    <Time />
    <Title>{title}</Title>
  </header>
);
export default Header;
