"use client";
import Image from "next/image";

import styles from "./ProjectCard.module.scss";
import Link from "next/link";

type ProjectCard = {
  id: string;
  title: string;
  text: string;
  links: { [key: string]: string };
  enterButtonText: string;
  codeButtonText: string;
};

export default function ProjectCard({
  id,
  title,
  text,
  links,
  enterButtonText,
  codeButtonText,
}: ProjectCard) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image
          src={`/images/${id}.jpg`}
          alt={id}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2>{title}</h2>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className={styles.projectCardFooter}>
        {links.live && (
          <Link href={links.live} className={styles.visit} target="_blank">
            {enterButtonText}
          </Link>
        )}
        {links.code ? (
          <Link href={links.code} className={styles.visit} target="_blank">
            {codeButtonText}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
