import { Link } from "react-router-dom";
import Styles from "./combLibNav.module.css";

const CombLibNav = () => {
  return (
    <nav className={Styles.navContainer}>
      <Link className={Styles.link} to={"/buttons"}>
        Buttons
      </Link>
      <Link className={Styles.link} to={"/components"}>
        forms
      </Link>
      <Link className={Styles.link} to={"/components"}>
        menus
      </Link>
      <Link className={Styles.link} to={"/components"}>
        Footers
      </Link>
      <Link className={Styles.link} to={"/components"}>
        Specials
      </Link>
    </nav>
  );
};

export default CombLibNav;
