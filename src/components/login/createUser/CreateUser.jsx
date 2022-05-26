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

  const register = async (e) => {
    e.preventDefault();
    if (
      password &&
      password === confirmPassword &&
      email &&
      email === confirmEmail
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
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
    } else {
      alert("Your mail or password didnt match");
    }
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Create account</h2>
      <form className={Styles.loginForm} action=''>
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
