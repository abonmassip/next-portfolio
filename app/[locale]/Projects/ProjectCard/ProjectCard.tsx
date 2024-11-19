"use client";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

import styles from "./ProjectCard.module.scss";

type ProjectCard = {
  id: string;
  title: string;
  text: string;
  links: { [key: string]: string };
  visitMessage: string;
};

export default function ProjectCard({
  id,
  title,
  text,
  links,
  visitMessage,
}: ProjectCard) {
  return (
    <div key={id} className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image src={`/images/${id}.jpg`} alt={id} fill />
      </div>
      <h2>{title}</h2>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className={styles.projectCardFooter}>
        {links.live ? (
          <a
            className={styles.enter}
            href={links.live}
            target="_blank"
            rel="noreferrer"
          >
            {visitMessage}
          </a>
        ) : null}
        {links.code ? (
          <a
            className={styles.github}
            href={links.code}
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        ) : null}
      </div>
    </div>
  );
}
