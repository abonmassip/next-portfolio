import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

export async function getPageData(
  locale: string,
  page: string
): Promise<string> {
  const pagesDirectory = path.join(process.cwd(), "content/pages", locale);

  const fileName = `${page}.md`;
  const fullPath = path.join(pagesDirectory, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const processedMarkdown = await remark().use(html).process(fileContent);
  const finalText = String(processedMarkdown).replace(
    /<a /g,
    `<a target="_blank" `
  );

  return finalText;
}
