import Image from "next/image";
import { useTranslations } from "next-intl";

import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

import styles from "./About.module.scss";

export default function About({ aboutData }: { aboutData: string }) {
  const t = useTranslations("about");

  return (
    <section className={styles.about} id="about">
      <div className={styles.languages}>
        <LanguageSwitcher />
      </div>

      <div className={styles.profile}>
        <div className={styles.name}>
          <h1>{t("name")}</h1>
          <h2>{t("role")}</h2>
        </div>

        <SocialIcons />

        <div>
          <div className={styles.avatar}>
            <Image
              fill
              src="/images/profile.jpg"
              alt="Albert's avatar"
              sizes="(max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: aboutData }}
        />
      </div>

      <SkillsGrid />
    </section>
  );
}
