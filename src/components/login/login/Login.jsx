import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./login.module.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {};

  const handelClick = (e) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <form className={Styles.loginForm} action=''>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>USERNAME:</label>
          <input type='text' />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>PASSWORD</label>
          <input type='password' />
        </div>
        <Link className={Styles.link} to={"/createUser"}>
          Create Account?
        </Link>
        <div className={Styles.btnContainer}>
          <button
            onClick={(e) => {
              handelClick(e);
            }}
            className='neutral-btn'
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
