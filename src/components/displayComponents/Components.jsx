import CombLibNav from "./componentLibraryNav/CombLibNav";
import Styles from "./Components.module.css";

const Components = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>Component library</h2>
      <CombLibNav />
      <div className={Styles.innerContainer}></div>
      <div className={Styles.innerContainer2}></div>
    </section>
  );
};

export default Components;
