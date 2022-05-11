import CombLibNav from "./componentLibraryNav/CombLibNav";
import Styles from "./Components.module.css";

const Components = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>Component library</h2>
      <CombLibNav />
    </section>
  );
};

export default Components;
