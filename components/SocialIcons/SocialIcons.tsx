import Link from "next/link";

import { SiGithub, SiLinkedin, SiArtstation } from "react-icons/si";

import styles from "./SocialIcons.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <Link href="http://www.linkedin.com/in/abonmassip" target="_blank">
        <SiLinkedin />
      </Link>
      <Link href="http://github.com/abonmassip" target="_blank">
        <SiGithub />
      </Link>
      <Link href="https://abonmassip.artstation.com/" target="_blank">
        <SiArtstation />
      </Link>
    </div>
  );
};

export default SocialIcons;
