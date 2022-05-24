import Navbar from "../navbar/Navbar";
import Styles from "./Header.module.css";
import Title from "./title/Title";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Header = ({ setUser }) => {
  return (
    <header className={Styles.container}>
      <Title />
      <Navbar setUser={setUser} />
    </header>
  );
};

export default Header;
