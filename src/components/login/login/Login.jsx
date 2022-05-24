import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(`Something went wromg when trying to login, err ${err}`);
    }
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form className={Styles.loginForm} action=''>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>EMAIL:</label>
          <input onChange={(e) => setEmail(e.target.value)} type='text' />
        </div>
        <div className={Styles.inputContainer}>
          <label onChange={(e) => setPassword(e.target.value)} htmlFor=''>
            PASSWORD
          </label>
          <input type='password' />
        </div>
        <Link className={Styles.link} to={"/createUser"}>
          Create Account?
        </Link>
        <div className={Styles.btnContainer}>
          <button onClick={login} className='neutral-btn'>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
