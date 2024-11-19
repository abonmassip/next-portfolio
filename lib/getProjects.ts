import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Project = {
  id: string;
  text: string;
  title: string;
  tech: string[];
  links: { [key: string]: string };
  date: string;
};

export async function getProjectsData(locale: string): Promise<Project[]> {
  const projectsDirectory = path.join(
    process.cwd(),
    "content/projects",
    locale
  );
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(projectsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { content, data } = matter(fileContent);

      const processedMarkdown = await remark().use(html).process(content);

      const finalText = String(processedMarkdown).replace(
        /<a /g,
        `<a target="_blank" `
      );

      return {
        id,
        text: finalText,
        title: data.title,
        tech: data.tech,
        links: data.links,
        date: data.date,
      };
    })
  );
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
