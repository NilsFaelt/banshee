import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
import { UserCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className={Styles.container}>
      <div className={Styles.linkContainer}>
        <Link className={Styles.links} to={"/"}>
          Home
        </Link>
        <Link className={Styles.links} to={"/components"}>
          Components
        </Link>
        <Link className={Styles.links} to={"/about"}>
          ABout banshee
        </Link>
        <Link className={Styles.links} to={"/"}>
          developers forum
        </Link>
        <Link className={Styles.links} to={"/contact"}>
          Contact
        </Link>
        <Link className={Styles.userLink} to={"/contact"}>
          <UserCircleIcon className={Styles.userIcon} />
          <p>logg in</p>
        </Link>
      </div>
      <hr className={Styles.hr} />
    </nav>
  );
};

export default Navbar;
