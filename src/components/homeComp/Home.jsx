import Styles from "./home.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { Parallax } from "react-parallax";
import goonies from "../../img/goonies.png";
import shipsite from "../../img/shipsite.png";
const image1 =
  "https://images.unsplash.com/photo-1654707981578-e1a5ad419ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const Home = () => {
  return (
    <main className={Styles.home}>
      <div className={Styles.sectionContainer}>
        <hr className={Styles.hrTwo} />
        <div className={Styles.innerSectionContainer}>
          <section className={Styles.section}>
            <a href='https://the-goonies.webflow.io/#home' target='_blank'>
              <h3 className={Styles.title}>Playful website</h3>
              <p className={Styles.text}>
                Very smal, but playful website, with shitloads of stuff going
                on, but a little bit anoying to acctualy use.
              </p>
              <Parallax
                bgImage={goonies}
                style={{ marginTop: "2vh", border: "solid 1px white " }}
              >
                <div style={{ width: "30vw", height: "35vh" }}></div>
              </Parallax>
              <p className={Styles.textCursive}>
                Havent dove into who made the website or with wich libarary,
                just liked the page and added it.
              </p>
            </a>
          </section>
          <section className={Styles.section}>
            <a href='http://irishwrecksonline.net/' target='_blank'>
              <h3 className={Styles.title}>How Good can it get</h3>
              <p className={Styles.text}>
                I heard a story about 3 backend developers whom had a idea that
                they were gonna start a website to find sunken shipwrecks.
              </p>
              <Parallax
                bgImage={shipsite}
                style={{ marginTop: "2vh", border: "solid 1px white " }}
              >
                <div style={{ width: "30vw", height: "35vh" }}></div>
              </Parallax>
              <p className={Styles.text}>
                I went out for a search and found it, but never in my mind could
                i imagine the beauty they had been able to create.
              </p>

              <p className={Styles.textCursive}>Love them backenders</p>
            </a>
          </section>
          <section className={Styles.section}>
            <h3
              className={Styles.title}
              style={{ marginBottom: "3vh", marginTop: "3vh" }}
            >
              Badass websites
            </h3>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://www.loftgarten.co/'
            >
              LOFTGARDEN
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://www.wannabe.toys/'
            >
              WANNABE
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://www.digitalchina.university/'
            >
              DIGITAL CHINA
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://delassus.com/en/'
            >
              DELASSUS
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://www.totem.earth/'
            >
              TOTEM
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://peterlindbergh.obys.agency/'
            >
              PETER LINDBERG
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://longshotfeatures.com/'
            >
              LONGSHOTFEATURES
            </a>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://bstd.ru/en/'
            >
              BSTD
            </a>
          </section>
        </div>
        <div style={{ width: "100vw", height: "30vh" }}>
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image1}
            style={{ width: "100vw", height: "30vh", marginTop: "20vh" }}
          >
            <div style={{ width: "100vw" }}></div>
          </Parallax>
        </div>
      </div>
      <PaperAirplaneIcon className={Styles.plane} />
    </main>
  );
};

export default Home;
