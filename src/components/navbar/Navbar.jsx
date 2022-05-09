import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.container}>
      <div className={Styles.linkContainer}>
        <Link className={Styles.links} to={"/displayModules"}>
          Components
        </Link>
        <Link className={Styles.links} to={"/"}>
          Learn
        </Link>
        <Link className={Styles.links} to={"/"}>
          Inspiration
        </Link>
        <Link className={Styles.links} to={"/"}>
          Contact
        </Link>
        <Link className={Styles.links} to={"/"}>
          Home
        </Link>
      </div>
      <hr className={Styles.hr} />
    </nav>
  );
};

export default Navbar;
