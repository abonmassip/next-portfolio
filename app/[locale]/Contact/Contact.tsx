"use client";
import { useTranslations } from "next-intl";

import SocialIcons from "@/components/SocialIcons/SocialIcons";

import styles from "./Contact.module.scss";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className={styles.contact} id="contact">
      <h1>{t("title")}</h1>

      <div className={styles.formContainer}>
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="text" name="name" placeholder={t("name")} required />
          <input type="email" name="email" placeholder={t("email")} required />
          <textarea
            name="message"
            placeholder={t("message")}
            required
          ></textarea>

          <button type="submit">{t("submit")}</button>
        </form>
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
