import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.container}>
      <div className={Styles.linkContainer}>
        <Link className={Styles.links} to={"/"}>
          Home
        </Link>
        <Link className={Styles.links} to={"/displayModules"}>
          Components
        </Link>
        <Link className={Styles.links} to={"/"}>
          ABout banshee
        </Link>
        <Link className={Styles.links} to={"/"}>
          developers forum
        </Link>
        <Link className={Styles.links} to={"/contact"}>
          Contact
        </Link>
      </div>
      <hr className={Styles.hr} />
    </nav>
  );
};

export default Navbar;
