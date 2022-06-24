import { Link } from "react-router-dom";
import Styles from "./navBarOnClick.module.css";
import { UserCircleIcon } from "@heroicons/react/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";

const NavBarOnClick = ({ user, setUser, setActivateMenu, activateMenu }) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const loggout = async () => {
    await signOut(auth);
  };

  const closeNav = () => {
    setActivateMenu(true);
  };

  return (
    <nav className={Styles.container}>
      <div className={Styles.linkContainer}>
        {user ? (
          <div className={Styles.linkContainer}>
            <p onClick={() => loggout()} className={Styles.userLink}>
              Logout
            </p>
          </div>
        ) : null}
        {!user ? (
          <Link onClick={closeNav} className={Styles.userLink} to={"/login"}>
            <p>Login</p>
          </Link>
        ) : null}
        <Link onClick={closeNav} className={Styles.links} to={"/"}>
          Home
        </Link>
        <Link onClick={closeNav} className={Styles.links} to={"/components"}>
          Components
        </Link>
        <Link onClick={closeNav} className={Styles.links} to={"/about"}>
          ABout banshee
        </Link>
        <Link onClick={closeNav} className={Styles.links} to={"/"}>
          developers forum
        </Link>
        <Link onClick={closeNav} className={Styles.links} to={"/contact"}>
          Contact
        </Link>
        <h2 onClick={closeNav} className={Styles.links} to={"/contact"}>
          Close menu
        </h2>
      </div>
    </nav>
  );
};

export default NavBarOnClick;
