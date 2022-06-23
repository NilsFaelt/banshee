import { useState } from "react";
import NavBarOnClick from "../navBarOnClick/NavBarOnClick";
import Styles from "./menu.module.css";

const Menu = ({ user, setUser, setActivateMenu, activateMenu }) => {
  return (
    <nav className={activateMenu ? Styles.container : Styles.containerOpen}>
      {activateMenu ? null : (
        <NavBarOnClick
          setUser={setUser}
          user={user}
          setActivateMenu={setActivateMenu}
          activateMenu={activateMenu}
        />
      )}
      <div></div>
    </nav>
  );
};

export default Menu;
