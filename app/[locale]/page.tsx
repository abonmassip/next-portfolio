import { LocalesType } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { getProjectsData } from "@/lib/getProjects";
import { getPageData } from "@/lib/getPages";

import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";

import styles from "./page.module.scss";

type Params = Promise<{ locale: LocalesType }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projectsData = await getProjectsData(locale);
  const aboutData = await getPageData(locale, "about");

  return (
    <main className={styles.page}>
      <About aboutData={aboutData} />
      <Projects projectsData={projectsData} />
      <Contact />
    </main>
  );
}
