import CombLibNav from "../componentLibraryNav/CombLibNav";
import FormOne from "./formOne/FormOne";
import Styles from "./forms.module.css";

const Forms = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Forms</h2>
      <CombLibNav />
      <h2 className={Styles.componentsTitle}>Form</h2>
      <FormOne />
    </div>
  );
};

export default Forms;
