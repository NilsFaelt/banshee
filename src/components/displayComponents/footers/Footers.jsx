import CombLibNav from "../componentLibraryNav/CombLibNav";
import FooterOne from "./footerOne/FooterOne";
import Styles from "./footers.module.css";

const Footers = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Footers</h2>
      <CombLibNav />
      <h3 className={Styles.footersTitle}>Click the cogs</h3>
      <p className={Styles.textCursive}>
        Cogs only work in place, mind the screen size
      </p>
      <FooterOne />
    </div>
  );
};

export default Footers;
