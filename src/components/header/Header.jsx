import Navbar from "../navbar/Navbar";
import Styles from "./Header.module.css";
import Title from "./title/Title";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className={Styles.container}>
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
