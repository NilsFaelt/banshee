import { Link } from "react-router-dom";
import Styles from "./navBarOnClick.module.css";
import { UserCircleIcon } from "@heroicons/react/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useEffect, useState } from "react";

const NavBarOnClick = ({
  user,
  setUser,
  setActivateMenu,
  activateMenu,
  changeTitle,
}) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const loggout = async () => {
    await signOut(auth);
  };

  const closeNav = () => {
    setActivateMenu(true);
    changeTitle("BANSHEE");
  };

  return (
    <nav className={Styles.container}>
      <div className={Styles.linkContainer}>
        {user ? (
          <div className={Styles.linkContainer}>
            <p
              onMouseOver={() => changeTitle("LOGOUT")}
              onMouseOut={() => changeTitle("BANSHEE")}
              onClick={() => loggout()}
              className={Styles.userLink}
            >
              Logout
            </p>
          </div>
        ) : null}
        {!user ? (
          <Link
            onClick={closeNav}
            onMouseOver={() => changeTitle("LOGIN")}
            onMouseOut={() => changeTitle("BANSHEE")}
            className={Styles.userLink}
            to={"/login"}
          >
            <p>Login</p>
          </Link>
        ) : null}
        <Link
          onMouseOver={() => changeTitle("HOME")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/"}
        >
          Home
        </Link>
        <Link
          onMouseOver={() => changeTitle("COMPONENTS")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/components"}
        >
          Components
        </Link>
        <Link
          onMouseOver={() => changeTitle("ABOUT BANSHEE")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/about"}
        >
          About banshee
        </Link>
        <Link
          onMouseOver={() => changeTitle("DEVELOPERS FORUM")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/"}
        >
          developers forum
        </Link>
        <Link
          onMouseOver={() => changeTitle("CONTACT")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/contact"}
        >
          Contact
        </Link>
        <h2
          onMouseOver={() => changeTitle("CLOSE MENU")}
          onMouseOut={() => changeTitle("BANSHEE")}
          onClick={closeNav}
          className={Styles.links}
          to={"/contact"}
        >
          Close menu
        </h2>
      </div>
    </nav>
  );
};

export default NavBarOnClick;
