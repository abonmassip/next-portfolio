"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const t = useTranslations("contact");
  const [result, setResult] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setResult(t("sending"));

      const formData = new FormData(event.target as HTMLFormElement);
      const body = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        body.append(key, value.toString());
      }

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.status === 200) {
        setResult(t("success"));
      } else {
        setResult(`${t("error")}: ${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setResult(`${t("error")}: ${e}`);
    }
  };

  return (
    <>
      <form
        className={styles.contactForm}
        name="contact"
        onSubmit={handleFormSubmit}
      >
        <input type="text" name="name" placeholder={t("name")} required />
        <input type="email" name="email" placeholder={t("email")} required />
        <textarea name="message" placeholder={t("message")} required></textarea>

        <button type="submit">{t("submit")}</button>
        <span>{result}</span>
      </form>
    </>
  );
};

export default ContactForm;
