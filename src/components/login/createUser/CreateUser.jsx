import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./createUser.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const CreateUser = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [activate, setActivate] = useState(false);
  const [confirmCreatedAccount, setConfirmCreatedAccount] = useState(null);

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
          alert("created");
          setConfirmCreatedAccount("");
        }
        console.log(test.user.accessToken, "testttttttt");
        navigate("/");
      } catch (err) {
        console.log(
          `Something went wrong when tyrying to create user, err ${err.message}`
        );
      }
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setConfirmEmail("");
    }
    alert("Make sure email and password is correcrt");
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Create account</h2>
      <form
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
    </div>
  );
};

export default CreateUser;
