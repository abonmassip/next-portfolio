"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  MdCheckBoxOutlineBlank as IconInactive,
  MdIndeterminateCheckBox as IconActive,
} from "react-icons/md";

import { Project } from "@/lib/getProjects";

import styles from "./ProjectsFilter.module.scss";

const ProjectsFilter = ({
  filterProjects,
  projectsData,
}: {
  filterProjects: (filterList: string[]) => void;
  projectsData: Project[];
}) => {
  const t = useTranslations("projects");

  const [filterList, setFilterList] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  useEffect(() => {
    const list: string[] = [];
    projectsData.forEach((project) => {
      project.tech.forEach((tech) => !list.includes(tech) && list.push(tech));
    });
    setFilterList(list);
  }, [projectsData]);

  useEffect(() => {
    filterProjects(selectedFilter);
  }, [selectedFilter, filterProjects]);

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((t) => t !== filter)
        : [...prev, filter]
    );
  };

  const resetFilters = () => {
    setSelectedFilter([]);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersList}>
        {filterList.map((tech) => (
          <button
            className={`${styles.filterButton} ${
              selectedFilter.includes(tech) ? styles.selected : ""
            }`}
            key={tech}
            onClick={() => handleFilterSelect(tech)}
          >
            {tech}
            {selectedFilter.includes(tech) ? <IconActive /> : <IconInactive />}
          </button>
        ))}
      </div>
      <div className={styles.clearButton}>
        <button
          onClick={resetFilters}
          className={selectedFilter.length ? styles.active : ""}
        >
          {t("clearFilter")}
        </button>
      </div>
    </div>
  );
};

export default ProjectsFilter;
