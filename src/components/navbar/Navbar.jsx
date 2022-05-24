import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
import { UserCircleIcon } from "@heroicons/react/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const loggout = async () => {
    await signOut(auth);
  };
  console.log(user);
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
        {!user ? (
          <Link className={Styles.userLink} to={"/login"}>
            <UserCircleIcon className={Styles.userIcon} /> <p>Login</p>
          </Link>
        ) : null}
        {user ? (
          <div className={Styles.linkContainer}>
            <UserCircleIcon className={Styles.userIcon} />
            <p onClick={() => loggout()} className={Styles.logout}>
              Logout
            </p>
          </div>
        ) : null}
      </div>
      <p className={Styles.mail}> {user?.email}</p>
      <hr className={Styles.hr} />
    </nav>
  );
};

export default Navbar;
