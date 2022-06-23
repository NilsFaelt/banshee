import Styles from "./contact.module.css";
import { MailOpenIcon } from "@heroicons/react/outline";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";

const Contact = ({ user }) => {
  const [textAreaInput, setTextAreaInput] = useState("");
  const [fillMail, setFillMail] = useState(false);
  const [sendMailIcon, setSendMailIcon] = useState(false);
  const [wrongMail, setWrongMail] = useState(false);
  const [input, setInput] = useState({ email: "", confirm: "" });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setFillMail(false);
    if (input.email === input.confirm) {
      setSendMailIcon(true);
      setInput({ email: "", confirm: "" });
      setTextAreaInput("");
      setTimeout(() => {
        setSendMailIcon(false);
      }, 5000);
    } else if (input.email !== input.confirm) {
      setWrongMail(true);
      setTimeout(() => {
        setWrongMail(false);
      }, 100);
    }
  };

  const setFillMailFunc = () => {
    setFillMail(true);
  };

  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.container}>
        {sendMailIcon ? (
          <h2 className={Styles.title}>Thanks for your mail</h2>
        ) : (
          <h2 className={Styles.title}>Contact us at banshee</h2>
        )}
        <form
          method='POST'
          action='https://formsubmit.co/nils.faelt@gmail.com'
          onSubmit={(e) => handleClick(e)}
          className={Styles.form}
        >
          <label className={Styles.label} htmlFor=''>
            Email:
          </label>
          <input
            onChange={handleChange}
            required
            name='email'
            value={fillMail ? user.email : input.email}
            className={wrongMail ? Styles.inputAlert : Styles.input}
            type='email'
            placeholder='Email:'
          />
          <label className={Styles.label} htmlFor=''>
            Confirm Email:
          </label>
          <input
            onChange={handleChange}
            className={wrongMail ? Styles.inputAlert : Styles.input}
            required
            type='email'
            placeholder='Confirm Email:'
            name='confirm'
            value={fillMail ? user.email : input.confirm}
          />
          {user ? (
            <p onClick={() => setFillMailFunc()} className={Styles.useMail}>
              Use: {user?.email}
            </p>
          ) : null}
          <textarea
            onChange={(e) => setTextAreaInput(e.target.value)}
            className={Styles.textarea}
            value={textAreaInput}
            required
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button type='submit' className='neutral-btn'>
            SEND
          </button>
        </form>
        <MailOpenIcon
          className={sendMailIcon ? Styles.mailSvg : Styles.mailSvgFalse}
        />
      </div>
    </div>
  );
};

export default Contact;
