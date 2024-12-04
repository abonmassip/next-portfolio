"use client";
import Link from "next/link";
import mixpanel from "mixpanel-browser";

import { SiGithub, SiLinkedin, SiArtstation } from "react-icons/si";

import styles from "./SocialIcons.module.scss";

const SocialIcons = () => {
  const handleClick = (button: string) => {
    mixpanel.track("Button Click", { button_name: button });
  };
  return (
    <div className={styles.socialIcons}>
      <Link
        href="http://www.linkedin.com/in/abonmassip"
        target="_blank"
        onClick={() => handleClick("linkedin")}
      >
        <SiLinkedin />
      </Link>
      <Link
        href="http://github.com/abonmassip"
        target="_blank"
        onClick={() => handleClick("github")}
      >
        <SiGithub />
      </Link>
      <Link
        href="https://abonmassip.artstation.com/"
        target="_blank"
        onClick={() => handleClick("artstation")}
      >
        <SiArtstation />
      </Link>
    </div>
  );
};

export default SocialIcons;
