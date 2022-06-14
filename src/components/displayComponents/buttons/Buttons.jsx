import CombLibNav from "../componentLibraryNav/CombLibNav";
import ButtonOne from "./buttonOne/ButtonOne";
import Styles from "./buttons.module.css";
import ButtonThree from "./buttonThree/ButtonThree";
import ButtonTwo from "./buttonTwo/ButtonTwo";

const Buttons = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>BUTTONS</h2>
      <CombLibNav />
      <h2 className={Styles.componentTitle}>Make Room</h2>
      <ButtonOne />
      <h2 className={Styles.componentTitle}>Now You See Me</h2>
      <ButtonTwo />
      <h2 className={Styles.componentTitle}>Make Me Hoover</h2>
      <ButtonThree />
    </section>
  );
};

export default Buttons;
