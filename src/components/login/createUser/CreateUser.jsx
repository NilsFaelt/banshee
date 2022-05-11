import { Link } from "react-router-dom";
import Styles from "./createUser.module.css";

const CreateUser = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("handlclick");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Create account</h2>
      <form className={Styles.loginForm} action=''>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>USERNAME:</label>
          <input type='text' />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>PASSWORD:</label>
          <input type='password' />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>CONFIRM PASSWORD::</label>
          <input type='password' />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>EMAIL:</label>
          <input type='text' />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor=''>CONFIRM EMAIL:</label>
          <input type='text' />
        </div>

        <Link className={Styles.link} to={"/login"}>
          Login?
        </Link>
        <div className={Styles.btnContainer}>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className='neutral-btn'
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
