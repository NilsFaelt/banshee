import CombLibNav from "../componentLibraryNav/CombLibNav";
import Styles from "./menus.module.css";

const Menus = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Menus</h2>
      <CombLibNav />
    </div>
  );
};

export default Menus;
