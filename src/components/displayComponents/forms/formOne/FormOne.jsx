import { useState } from "react";
import Styles from "./formOne.module.css";

const FormOne = () => {
  const [activate, setActivate] = useState(true);
  const [btnActivate, setBtnActivate] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlClick = (e) => {
    e.preventDefault();
    setBtnActivate(false);
    setUsername("");
    setPassword("");
  };

  if (!btnActivate) {
    setTimeout(() => {
      setBtnActivate(true);
    }, 6000);
  }

  return (
    <div className={btnActivate ? Styles.container : Styles.containerAni}>
      <h3 className={Styles.bansheeTitle}> Welocome to Banshee</h3>
      <div
        className={btnActivate ? Styles.formWrapper : Styles.formWrapperHide}
      >
        <form
          onSubmit={(e) => handlClick(e)}
          type='submit'
          onMouseOver={() => setActivate(false)}
          onMouseOut={() => setActivate(true)}
          className={activate ? Styles.form : Styles.formAni}
          action=''
        >
          <label className={Styles.label} htmlFor=''>
            USERNAME:
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={Styles.input}
            type='text'
          />
          <label className={Styles.label} htmlFor=''>
            PASSWORD:
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className={Styles.input}
            type='password'
          />
          <button className={Styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
