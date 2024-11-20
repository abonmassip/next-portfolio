"use client";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";

import ProjectCard from "./ProjectCard/ProjectCard";
import { type Project } from "@/lib/getProjects";
import ProjectsFilter from "./ProjectsFilter/ProjectsFilter";

import styles from "./Projects.module.scss";

export default function Projects({
  projectsData,
}: {
  projectsData: Project[];
}) {
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);

  const filterProjects = useCallback(
    (filterList: string[]) => {
      const filtered = projectsData.filter((project) =>
        filterList.every((filter) => project.tech.includes(filter))
      );
      setFilteredProjects(filtered);
    },
    [projectsData]
  );
  const t = useTranslations("projects");
  return (
    <section className={styles.projectsContainer} id="projects">
      <h1>{t("title")}</h1>
      <ProjectsFilter
        filterProjects={filterProjects}
        projectsData={projectsData}
      />

      <div className={styles.projectsGrid}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              enterButtonText={t("visit")}
              codeButtonText={t("code")}
            />
          ))
        ) : (
          <div className={styles.noProjects}>
            <p>{t("noMatch")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
