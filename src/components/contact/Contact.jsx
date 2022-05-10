import { useState } from "react";
import Styles from "./contact.module.css";

const Contact = () => {
  const [input, setInput] = useState({ email: "", confirm: "" });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("test");
  };
  console.log(input);
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact us at banshee</h2>
      <form className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Email:
        </label>
        <input
          onChange={handleChange}
          name='email'
          value={input.email}
          className={Styles.input}
          type='email'
          placeholder='Email:'
        />
        <label className={Styles.label} htmlFor=''>
          Confirm Email:
        </label>
        <input
          onChange={handleChange}
          className={Styles.input}
          type='email'
          placeholder='Confirm Email:'
          name='confirm'
          value={input.confirm}
        />
        <textarea
          className={Styles.textarea}
          name=''
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <button onClick={(e) => handleClick(e)} className='neutral-btn'>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
