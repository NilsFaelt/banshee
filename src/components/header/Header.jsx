import Navbar from "../navbar/Navbar";
import Styles from "./Header.module.css";
import Title from "./title/Title";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Header = ({ setUser, user }) => {
  return (
    <header className={Styles.container}>
      <Title />
      <Navbar setUser={setUser} user={user} />
    </header>
  );
};

export default Header;
