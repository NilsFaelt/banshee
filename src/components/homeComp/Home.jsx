import Styles from "./home.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <main className={Styles.home}>
      <section className={Styles.section}>
        <div className={Styles.homeAboutBanshee}>
          <h2 className={Styles.homeAboutBansheeTitle}>About us</h2>
          <p>
            Banshee were created by developers for developers, to create a
            website and forum were we can share our code, components and
            knowledge. The main focus is towards react and all the librarys and
            modules that comes with it, but feel free to share all your usable
            knowledge in here. <br /> Our goal is to keep it simple, and
            understandble.
            <br />/ Best regards The Banshee crew
          </p>
        </div>
        <div className={Styles.forum}>
          <h2 className={Styles.homeAboutBansheeTitle}>Latest Post</h2>
          <p>Latest forum post will show uo here</p>
        </div>
      </section>
      <section className={Styles.section}></section>
      <section className={Styles.section}></section>
      <PaperAirplaneIcon className={Styles.plane} />
    </main>
  );
};

export default Home;
