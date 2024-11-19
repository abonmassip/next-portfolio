"use client";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import styles from "./Contact.module.scss";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ArrowButton from "@/components/ArrowButton/ArrowButton";

export default function Contact() {
  const t = useTranslations("contact");
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult(t("sending"));
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "d79aa01a-3d47-4d2f-87fa-4635d75963e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(t("success"));
      form.reset();
    } else {
      console.log(t("error"), data);
      setResult(data.message);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <h1>{t("title")}</h1>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onSubmit}>
          <input type="text" name="name" placeholder={t("name")} required />
          <input type="email" name="email" placeholder={t("email")} required />
          <textarea
            name="message"
            placeholder={t("message")}
            required
          ></textarea>

          <button type="submit">{t("submit")}</button>
        </form>
        <span>{result}</span>
      </div>

      <a className={styles.link} href="#hero">
        <ArrowButton direction="up" />
        {t("top")}
      </a>

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
