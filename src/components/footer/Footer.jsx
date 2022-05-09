import Styles from "./footer.module.css";
import face from "../../icons/face.png";
import twitter from "../../icons/twitter.png";
import insta from "../../icons/insta.png";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.divContainer}>
        <div className={Styles.containers}>
          <p className={Styles.text}>Contact</p>
          <p className={Styles.text}>Faqs</p>
          <p className={Styles.text}>Home</p>
        </div>
        <div className={Styles.containers}>
          <p className={Styles.text}>Contact</p>
          <p className={Styles.text}>Faqs</p>
          <p className={Styles.text}>Home</p>
        </div>
        <div className={Styles.containers}>
          <p className={Styles.text}>Contact</p>
          <p className={Styles.text}>Faqs</p>
          <p className={Styles.text}>Home</p>
        </div>
      </div>
      <div className={Styles.socialContainer}>
        <img className={Styles.socialIcon} src={face} alt='' />
        <img className={Styles.socialIcon} src={twitter} alt='' />
        <img className={Styles.socialIcon} src={insta} alt='' />
      </div>
    </footer>
  );
};

export default Footer;
