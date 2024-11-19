import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiThreedotjs,
  SiGit,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

import styles from "./SkillsGrid.module.scss";

const SkillsGrid = () => {
  return (
    <div className={styles.skillsGrid}>
      <div className={styles.skill}>
        <SiHtml5 />
        <strong>HTML5</strong>
      </div>
      <div className={styles.skill}>
        <SiCss3 />
        <strong>CSS3</strong>
      </div>
      <div className={styles.skill}>
        <SiJavascript />
        <strong>JavaScript</strong>
      </div>
      <div className={styles.skill}>
        <SiReact />
        <strong>React</strong>
      </div>
      <div className={styles.skill}>
        <SiNextdotjs />
        <strong>Next.js</strong>
      </div>
      <div className={styles.skill}>
        <SiThreedotjs />
        <strong>Three.js</strong>
      </div>
      <div className={styles.skill}>
        <SiGit />
        <strong>Git</strong>
      </div>
      <div className={styles.skill}>
        <SiExpress />
        <strong>Express</strong>
      </div>
      <div className={styles.skill}>
        <SiPostgresql />
        <strong>PostgreSQL</strong>
      </div>
      <div className={styles.skill}>
        <SiMongodb />
        <strong>MongoDB</strong>
      </div>
      <div className={styles.skill}>
        <SiAdobephotoshop />
        <strong>Photoshop</strong>
      </div>
      <div className={styles.skill}>
        <SiBlender />
        <strong>Blender</strong>
      </div>
    </div>
  );
};

export default SkillsGrid;
