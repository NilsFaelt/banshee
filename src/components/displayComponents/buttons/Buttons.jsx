import CombLibNav from "../componentLibraryNav/CombLibNav";
import ButtonOne from "./buttonOne/ButtonOne";
import Styles from "./buttons.module.css";

const Buttons = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>BUTTONS</h2>
      <CombLibNav />
      <ButtonOne />
    </section>
  );
};

export default Buttons;
