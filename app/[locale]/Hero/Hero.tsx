"use client";
import ArrowButton from "@/components/ArrowButton/ArrowButton";
import styles from "./Hero.module.scss";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <div className={styles.hero} id="hero">
      <div className={styles.languages}>
        <Link
          href="/"
          locale="ca"
          className={`${locale === "ca" && styles.active}`}
        >
          Català
        </Link>
        <Link
          href="/"
          locale="en"
          className={`${locale === "en" && styles.active}`}
        >
          English
        </Link>
      </div>
      <div className={styles.heading}>
        <SocialIcons />
        <div>
          <h1 className={styles.line1}>{t("line1")}</h1>
          <h1 className={styles.line2}>{t("line2")}</h1>
        </div>
        <a className={styles.link} href="#aboutme">
          <ArrowButton direction="down" />
        </a>
      </div>
    </div>
  );
}
