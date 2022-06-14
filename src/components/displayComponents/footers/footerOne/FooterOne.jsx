import Styles from "./footerOne.module.css";
import { CogIcon } from "@heroicons/react/outline";
import { useState } from "react";

const FooterOne = () => {
  const [activate, setActivate] = useState(true);
  return (
    <footer onClick={() => setActivate(!activate)} className={Styles.container}>
      <CogIcon className={activate ? Styles.cog : Styles.cogAni} />;
      <CogIcon className={activate ? Styles.cogTwo : Styles.cogTwoAni} />;
    </footer>
  );
};

export default FooterOne;
