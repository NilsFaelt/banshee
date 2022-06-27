import Styles from "./home.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { Parallax } from "react-parallax";
import goonies from "../../img/goonies.png";
import shipsite from "../../img/shipsite.png";
import longshot from "../../img/longshot.png";
const image1 =
  "https://images.unsplash.com/photo-1654707981578-e1a5ad419ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const Home = () => {
  return (
    <main className={Styles.home}>
      <div className={Styles.sectionContainer}>
        {/* <hr className={Styles.hrTwo} /> */}
        <h1 className={Styles.mainTitle}>RANDOM INSPIRATION FROM THE WEB</h1>
        <p
          className={Styles.textCursive}
          style={{
            textDecoration: "underline",
            color: "white",
            marginBottom: "2vh",
          }}
        >
          Some Fun beautiful and crazy websites i found out on the WWW.
        </p>
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
          <section className={Styles.sectionWebLinks}>
            <h3
              className={Styles.webLinkTitle}
              style={{ marginBottom: "4vh", marginTop: "1vh" }}
            >
              Badass websites
            </h3>
            <a
              target='_blank'
              className={Styles.websiteLinks}
              href='https://bstd.ru/en/'
            >
              BSTD
            </a>
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
          </section>
        </div>
        <div style={{ width: "100vw", height: "30vh", textAlign: "center" }}>
          <a
            target='_blank'
            href='https://www.npmjs.com/package/react-parallax'
          >
            <h2 className={Styles.parallaxTitle}>
              How i learned to love and hate the parallax effect
            </h2>
            <p
              className={Styles.textCursive}
              style={{ color: "black", textDecoration: "underline" }}
            >
              {" "}
              The parallax effect{" "}
            </p>
          </a>
          <p style={{ marginTop: "2vh", color: "white" }}>
            The parallax effect can be mezmerising and give depth and a
            responsive feeling to your website, and if you use it with caution
            you will make your website/app feel so much more profesional.
            <br /> But listen now, in the same way parallax can add unlimited
            power to your website, it can make your website chaotic, hard to
            manuever, and trust me it can even make the user feel seasick if you
            added to much to your parallax. <br />
            With thoose words said, start your new project npm install
            react-parallax, and find the power of parallax.
          </p>
        </div>
        <div style={{ width: "100vw", height: "30vh" }}>
          <Parallax
            bgImage={image1}
            style={{ width: "100vw", height: "30vh", marginTop: "20vh" }}
          >
            <div style={{ width: "100vw" }}></div>
          </Parallax>
          <div
            style={{
              width: "100vw",
              height: "auto",
              textAlign: "center",
              marginTop: "20vh",
            }}
          >
            <h2 className={Styles.parallaxTitle}>Im in love with a website</h2>
            <p style={{ marginTop: "2vh", color: "white" }}>
              Something with this website made me fall in love, maybe the broken
              sword ish illustartions, combined with the weirdness of trying to
              scroll up and down and you end up going horizontal.
            </p>
            <a target='_blank' href='https://longshotfeatures.com/'>
              <Parallax
                bgImage={longshot}
                style={{
                  width: "70vw",
                  height: "30vh",
                  margin: "0 auto",
                  marginTop: "2vh",
                }}
              >
                <div style={{ width: "100vw" }}></div>
              </Parallax>
              <p
                className={Styles.textCursive}
                style={{
                  textDecoration: "underline",
                  color: "white",
                  marginBottom: "20vh",
                }}
              >
                Make sure to give it a go.
              </p>
            </a>
          </div>
        </div>
      </div>
      <PaperAirplaneIcon className={Styles.plane} />
    </main>
  );
};

export default Home;
