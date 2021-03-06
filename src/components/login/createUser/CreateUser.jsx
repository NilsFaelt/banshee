import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./createUser.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import PopUp from "../../popup/PopUp";

const CreateUser = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [activate, setActivate] = useState(false);
  const [confirmCreatedAccount, setConfirmCreatedAccount] = useState(null);
  const [emailCreated, setEmailCreated] = useState(false);
  const [alertBox, setAlertBox] = useState(false);

  if (activate) {
    setTimeout(() => {
      setActivate(false);
    }, 100);
  }

  console.log(confirmCreatedAccount);

  const register = async (e) => {
    e.preventDefault();
    if (
      password === "" ||
      confirmPassword === "" ||
      email === "" ||
      confirmEmail === ""
    ) {
      setActivate(true);
      return;
    }
    if (
      password &&
      password === confirmPassword &&
      email &&
      email === confirmEmail
    ) {
      try {
        const test = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (test.user) {
          setEmailCreated(true);
          setConfirmCreatedAccount("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          setConfirmEmail("");
          console.log(test.user);
          // navigate("/");
          return;
        }
      } catch (err) {
        console.log(
          `Something went wrong when tyrying to create user, err ${err.message}`
        );
      }
    }
    setAlertBox(true);
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setConfirmEmail("");
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Create account</h2>
      <form
        type='submit'
        required
        className={activate ? Styles.formAlert : Styles.loginForm}
        action=''
      >
        <div className={Styles.inputContainer}>
          <label htmlFor=''>EMAIL:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            value={email}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>CONFIRM EMAIL:</label>
          <input
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
            type='email'
            value={confirmEmail}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>PASSWORD:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            value={password}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>CONFIRM PASSWORD::</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type='password'
            value={confirmPassword}
          />
        </div>

        <Link className={Styles.link} to={"/login"}>
          <p className={Styles.loginLink}>Login?</p>
        </Link>
        <div className={Styles.btnContainer}>
          <button onClick={(e) => register(e)} className='neutral-btn'>
            Create account
          </button>
        </div>
      </form>
      {emailCreated ? (
        <PopUp
          close={setEmailCreated}
          title={"Account created"}
          text={"Welcome to banshee"}
        />
      ) : null}
      {alertBox ? (
        <PopUp
          close={setAlertBox}
          title={"Something went wrong"}
          text={
            "Make sure email and password is correcrt, password needs to be minimum 8 charachters"
          }
        />
      ) : null}
    </div>
  );
};

export default CreateUser;
