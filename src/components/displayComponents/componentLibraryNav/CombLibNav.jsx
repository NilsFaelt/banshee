import { Link } from "react-router-dom";
import Styles from "./combLibNav.module.css";

const CombLibNav = () => {
  return (
    <nav className={Styles.navContainer}>
      <Link className={Styles.link} to={"/buttons"}>
        Buttons
      </Link>
      <Link className={Styles.link} to={"/forms"}>
        forms
      </Link>
      <Link className={Styles.link} to={"/menus"}>
        menus
      </Link>
      <Link className={Styles.link} to={"/footers"}>
        Footers
      </Link>
      <Link className={Styles.link} to={"/specials"}>
        Specials
      </Link>
    </nav>
  );
};

export default CombLibNav;
