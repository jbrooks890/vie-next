import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import { useState } from "react";
// import Markdown from "markdown-to-jsx";
import Page from "../components/shared/Page";
import Section from "../components/shared/Section";
import BlockTitle from "../components/frags/BlockTitle";
import Exhibit from "../components/blocks/Exhibit";
import Img from "../components/frags/Img";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import matter from "gray-matter";
// import { Markdown } from "markdown-to-jsx";

export default function Home({
  text,
}: {
  text: { content: string; frontMatter: { title: string; subtitle: string } };
}) {
  console.log({ text });
  return (
    <Page name="Home" className="flex col">
      <Section name="Welcome" type="index" banner="/images/VIE-BG-3.jpg">
        <Image
          src="/images/VIE-Logo2.png"
          alt="Vie Logo"
          width={480}
          height={480}
        />
      </Section>
      <Section
        name="Terrain"
        type="wide"
        theme="purple-glass"
        className="flex col middle"
      >
        <Exhibit
          feature={
            <Img
              src="/images/Board-WEB-3.png"
              altText="Vie Game Board"
              shadow={true}
            />
          }
          body={
            <>
              <BlockTitle
                title={text.frontMatter.title}
                subtitle={text.frontMatter.subtitle}
              />
              <div dangerouslySetInnerHTML={{ __html: text.content }} />
              {/* ^^ TODO: FIND ALTERNATIVE ^^ */}
              <button>Learn More</button>
            </>
          }
        />
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  const file = fs.readFileSync("public/lib/pages/home/terrain.md", "utf8");
  const parsed = matter(file);
  const content = await remark().use(html).process(parsed.content);

  return {
    props: {
      text: {
        frontMatter: parsed.data,
        content: content.toString(),
      },
    },
  };
}
