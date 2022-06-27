import { useState } from "react";
import NavBarOnClick from "../navBarOnClick/NavBarOnClick";
import Styles from "./menu.module.css";

const Menu = ({ user, setUser, setActivateMenu, activateMenu }) => {
  const [title, setTitle] = useState("");

  const changeTitle = (title) => {
    setTitle(title);
  };
  return (
    <nav className={activateMenu ? Styles.container : Styles.containerOpen}>
      <div className={Styles.pictureDivWrapper}>
        <div
          className={activateMenu ? Styles.pictureDiv : Styles.pictureDivClose}
        >
          <h3 className={Styles.title}>{title}</h3>
        </div>
        <div className={Styles.textDiv}></div>
      </div>
      {activateMenu ? null : (
        <NavBarOnClick
          changeTitle={changeTitle}
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
