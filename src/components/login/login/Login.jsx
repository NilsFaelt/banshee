import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUSer] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
      setEmail("");
      setPassword("");
      navigate("/");
      console.log(auth.accessToken, "tokennnnnnnnnn");
    } catch (err) {
      console.log(
        `Something went wromg when trying to login, err ${err.message}`
      );
    }
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form className={Styles.loginForm} action=''>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>EMAIL:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            value={email}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
          />
        </div>
        <Link className={Styles.link} to={"/createUser"}>
          Create Account?
        </Link>
        <div className={Styles.btnContainer}>
          <button onClick={(e) => login(e)} className='neutral-btn'>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
