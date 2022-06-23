import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./login.module.css";
import PopUp from "../../popup/PopUp";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUSer] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activate, setActivate] = useState(true);
  const [alertBox, setAlertBox] = useState(false);

  if (!activate) {
    setTimeout(() => {
      setActivate(true);
    }, 100);
  }

  const login = async (e) => {
    if (email === "" || password === "") {
      setActivate(false);
    }
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
      setEmail("");
      setPassword("");
      navigate("/");
      console.log(auth.accessToken, "tokennnnnnnnnn");
      return;
    } catch (err) {
      if (email !== "" && password !== "") {
        setEmail("");
        setPassword("");
        setAlertBox(true);
      }
      console.log(
        `Something went wromg when trying to login, err ${err.message}`
      );
    }
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form
        className={activate ? Styles.loginForm : Styles.loginFormAlert}
        action=''
      >
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
        <Link className={Styles.loginLink} to={"/createUser"}>
          <p className={Styles.loginLink}>Create Account?</p>
        </Link>
        <div className={Styles.btnContainer}>
          <button onClick={(e) => login(e)} className='neutral-btn'>
            LOGIN
          </button>
        </div>
      </form>
      {alertBox ? (
        <PopUp
          close={setAlertBox}
          title={"Couldnt loggin"}
          text={"Make sure email and password is corect"}
        />
      ) : null}
    </div>
  );
};

export default Login;
