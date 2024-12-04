"use client";
import { useCallback, useEffect, useState } from "react";
import { Link, LocalesType } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import mixpanel from "mixpanel-browser";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const locale = useLocale() as LocalesType;
  const t = useTranslations("navbar");
  const [currentSection, setCurrentSection] = useState("about");

  const onScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    let current;
    const { scrollY, innerHeight } = window;

    sections.forEach(({ id, offsetTop, offsetHeight }) => {
      const startCentered = offsetTop - innerHeight / 2;
      const endCentered = offsetTop + offsetHeight - innerHeight / 2;

      if (scrollY >= startCentered && scrollY <= endCentered) {
        current = id;
      }
    });

    if (currentSection !== current) {
      setCurrentSection(current || "");
      if (currentSection)
        mixpanel.track("Section View", { section: currentSection });
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [currentSection, onScroll]);

  return (
    <div className={styles.navBg}>
      <div className={styles.navContainer}>
        <Link
          href="#about"
          className={currentSection === "about" ? styles.active : ""}
        >
          {t("about")}
        </Link>
        <Link
          href="#projects"
          className={currentSection === "projects" ? styles.active : ""}
        >
          {t("projects")}
        </Link>
        <Link
          href="#contact"
          className={currentSection === "contact" ? styles.active : ""}
        >
          {t("contact")}
        </Link>
        <a
          className={styles.resume}
          href={`/AlbertBonmassip_CV-${locale}.pdf`}
          target="_blank"
          onClick={() => mixpanel.track("CV Click", { language: locale })}
        >
          <span className={styles.long}>{t("resume")}</span>
          <span className={styles.short}>CV</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
