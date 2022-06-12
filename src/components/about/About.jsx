import Styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <h2 className={Styles.firstTitle}>ABOUT BANSHEE</h2>
      <div className={Styles.container}>
        <div className={Styles.storyContainer}>
          <h2 className={Styles.title}>The background story</h2>
          <p>
            It all started as a project during my time at CME were i was
            studying to become a front end developer and decided i needed to
            share something inspiring and playful.
            <br /> I do understand the usage of librarays like bootstrap and
            mateial UI, and use them myself if the webpage/app im working on
            takes a benefit from using pre done components, but at the same time
            i grew so tired of the same look of all webpages all over the place
            and decided that i needed to share some inspirtaion that were a
            little bit more playful and weird. So i started building Banshee
            were i build and serach for inspirtaion/websites that other people
            have created, and share what i think is funny and weird.
          </p>
        </div>
        <div className={Styles.goalsContainer}>
          <h2 className={Styles.title}>My Goals</h2>
          <p>
            • Create my own weird components that i think is inspirational and
            fun, and gives a fresh breath of air. <br /> • Find crazy, fun, and
            amazing websites/apps out there and share with you.
            <br />• I love to get inspiration from all you developers out there
            and help share your crazy creations, to the world.
            <br /> • Live Love Laugh and Write Code
          </p>
        </div>
      </div>
      <section>
        <h3 className={Styles.secondTitle}>THE LOVE OF FREE ARTISTRY</h3>
        <p className={Styles.text}>
          We love the thought of the way to express yourself thru creativity.
        </p>
        <p className={Styles.textCursive}>
          Never stop exploring your innes creativity.
        </p>
      </section>
    </div>
  );
};

export default About;
