import CombLibNav from "../componentLibraryNav/CombLibNav";
import Styles from "./specials.module.css";

const Specials = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Specials</h2>
      <CombLibNav />
    </div>
  );
};

export default Specials;
