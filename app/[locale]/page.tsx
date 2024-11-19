import { getProjectsData } from "@/lib/getProjects";
import { getPageData } from "@/lib/getPages";

import { LocalesType } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

import Projects from "./Projects/Projects";
import Hero from "./Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
// import ReturnButton from "../../components/ReturnButton/ReturnButton";

import styles from "./page.module.scss";

type Params = Promise<{ locale: LocalesType }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projectsData = await getProjectsData(locale);
  const aboutData = await getPageData(locale, "about");

  return (
    <main className={styles.page}>
      <Hero />
      <Navbar />
      <AboutMe aboutData={aboutData} />
      <Projects projectsData={projectsData} />
      <Contact />
      {/* <ReturnButton /> */}
    </main>
  );
}
