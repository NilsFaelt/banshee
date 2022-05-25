import Styles from "./home.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <main className={Styles.home}>
      <div className={Styles.sectionContainer}>
        <hr className={Styles.hrTwo} />
        <section className={Styles.section}></section>
        <section className={Styles.section}></section>
      </div>
      <PaperAirplaneIcon className={Styles.plane} />
    </main>
  );
};

export default Home;
