import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import Page from "../shared/Page";
import Section from "../shared/Section";
import BlockTitle from "../frags/BlockTitle";
import Exhibit from "../blocks/Exhibit";
import Img from "../frags/Img";

export default function Home() {
  const [postContent, setPostContent] = useState("");

  const fetchMd = path => {
    // import("../../assets/text/test.md")
    let content;
    import(path)
      .then(res =>
        fetch(res.default)
          .then(res => res.text())
          .then(res => (content = res))
          .catch(err => console.error(err))
      )
      .catch(err => console.error(err));

    return content ?? null;
  };

  // useLayoutEffect(() => fetchMd(), []);

  return (
    <Page name="Home" className="flex col">
      <Section
        name="Welcome"
        type="index"
        banner={require("../../assets/images/VIE-BG-3.jpg")}
      >
        <img
          src={require("../../assets/images/VIE-Logo2.png")}
          alt="vie-logo"
          width={480}
          height={480}
          // style={{ height: "480px" }}
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
              src={require("../../assets/images/Board-WEB-3.png")}
              altText="Vie Game Board"
              shadow={true}
            />
          }
          body={
            <>
              <BlockTitle title="The Terrain" subtitle="The Board" />
              <p>
                Seem familiar? It should. The <em>Terrain</em> uses the standard
                pattern to orient game pieces. The symbols scattered across the
                board represent <em>bonus tiles</em>, further enhancing gameplay
                with special rules. While the board is larger than its
                precursors' (at 10x10 versus 8x8), bonus tiles and game cards
                help to accelerate gameplay. The enemy threat demands a more
                urgent pace at times.
              </p>
              {/* <Markdown>
                {fetchMd("../../assets/text/pages/home/terrain.md")}
              </Markdown> */}
              <button>Learn More</button>
            </>
          }
        />
      </Section>
      {/* <Section name="Fish">{<Markdown>{postContent}</Markdown>}</Section> */}
    </Page>
  );
}
