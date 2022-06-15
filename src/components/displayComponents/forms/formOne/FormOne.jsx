import Styles from "./formOne.module.css";

const FormOne = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form} action=''>
        <label className={Styles.label} htmlFor=''>
          USERNAME:
        </label>
        <input className={Styles.input} type='text' />
        <label className={Styles.label} htmlFor=''>
          PASSWORD:
        </label>
        <input className={Styles.input} type='text' />
        <button className={Styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default FormOne;
