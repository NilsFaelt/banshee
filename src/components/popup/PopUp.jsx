import Styles from "./popUp.module.css";

const PopUp = ({ title, text, user, close }) => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Banshee</h2>
      <h3 className={Styles.secondTitle}>{title}</h3>
      <p className={Styles.text}>{text}</p>
      <p>{user}</p>
      <button onClick={() => close(false)} className='neutral-btn'>
        Close
      </button>
    </div>
  );
};

export default PopUp;
