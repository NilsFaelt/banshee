import Styles from "./Header.module.css";
import Title from "./title/Title";

const Header = () => {
  return (
    <header className={Styles.container}>
      <Title />
    </header>
  );
};

export default Header;
