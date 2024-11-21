"use client";
import { useTranslations } from "next-intl";

import SocialIcons from "@/components/SocialIcons/SocialIcons";
import ContactForm from "@/components/ContactForm/ContactForm";

import styles from "./Contact.module.scss";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className={styles.contact} id="contact">
      <h1>{t("title")}</h1>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>

      <div className={styles.footer}>
        <br />
        <hr />
        <div className={styles.footerInfo}>
          <p>© {new Date().getFullYear()}</p>
          <p>Albert&apos;s Portfolio</p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
