"use client";
import { useTranslations } from "next-intl";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const t = useTranslations("contact");

  return (
    <form
      className={styles.contactForm}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="text" name="name" placeholder={t("name")} required />
      <input type="email" name="email" placeholder={t("email")} required />
      <textarea name="message" placeholder={t("message")} required></textarea>

      <button type="submit">{t("submit")}</button>
    </form>
  );
};

export default ContactForm;
