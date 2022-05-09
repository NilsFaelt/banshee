import Styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>
        <span className={Styles.letterB}>B</span>
        <span>a</span>
        <span>n</span>
        <span className={Styles.shee}>shee</span>
      </h1>
    </div>
  );
};

export default Title;
