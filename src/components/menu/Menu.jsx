import { useState } from "react";
import NavBarOnClick from "../navBarOnClick/NavBarOnClick";
import Styles from "./menu.module.css";

const Menu = ({ user, setUser }) => {
  const [activateMenu, setActivateMenu] = useState(false);
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
      Menu
    </nav>
  );
};

export default Menu;
