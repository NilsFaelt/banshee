import Styles from "./login.module.css";

const Login = () => {
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
          <input type='text' />
          <button className='neutral-btn'>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
