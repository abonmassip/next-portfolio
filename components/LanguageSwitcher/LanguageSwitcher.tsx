import { Link } from "@/i18n/routing";

import styles from "./LanguageSwitcher.module.scss";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();
  return (
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
  );
};

export default LanguageSwitcher;
