import CombLibNav from "../componentLibraryNav/CombLibNav";
import FooterOne from "./footerOne/FooterOne";
import Styles from "./footers.module.css";

const Footers = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Footers</h2>
      <CombLibNav />
      <h3 className={Styles.footersTitle}>Click the cog</h3>
      <FooterOne />
    </div>
  );
};

export default Footers;
