import Styles from "./about.module.css";

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.storyContainer}>
        <h2 className={Styles.title}>The background story</h2>
        <p>
          It all started as a sideproject to school, when we were studying to
          become fron end developers. <br />
          We got tired of all crazy forums filed with people explaing as if all
          of us out there had a bachelor in space scince, when all we wanted was
          a code snippet that showed us a way of getting around our problem.{" "}
          <br /> All respect to the people out there giving their time to help
          the community, but we need a forum were we skip all the crazy stuff,
          and just sort the problem, without the toppings. <br />
          <br />/ The Banshee crew
        </p>
      </div>
      <div className={Styles.goalsContainer}>
        <h2 className={Styles.title}>Our Goals</h2>
        <p>
          • Create snippets and modules that evryone can take part of and use
          for their own projects. <br /> • Let you developers rate all of our
          products, so that its easier for all of us to choose wichone to use.
          <br />• Let evryone add their own modules and snippets to our forum,
          but we will try them out before we allow them to be public on our
          site. To make sure evrything thats public works.
          <br /> • Skipping all the unnecessarily links and breadcrumbs that
          noone have ever used, and focus on the material that you acctualy have
          use of.
        </p>
      </div>
    </div>
  );
};

export default About;
