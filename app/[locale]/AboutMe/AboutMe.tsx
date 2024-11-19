import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import SkillsGrid from "./SkillsGrid/SkillsGrid";

import styles from "./AboutMe.module.scss";
import ArrowButton from "@/components/ArrowButton/ArrowButton";

export default function AboutMe({ aboutData }: { aboutData: string }) {
  const t = useTranslations("about");

  return (
    <section className={styles.aboutMe} id="aboutme">
      <h1>{t("title")}</h1>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image fill src="/images/profile.jpg" alt="Albert's avatar" />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: aboutData }}
        />
      </div>

      <SkillsGrid />

      <Link href="#projects" className={styles.link}>
        <ArrowButton direction="down" />
      </Link>
    </section>
  );
}
