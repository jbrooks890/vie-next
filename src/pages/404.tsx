import Page from "@/components/shared/Page";
import Section from "@/components/shared/Section";
import { useRouter } from "next/router";

export default function NotFound() {
  const { back } = useRouter();
  return (
    <Page name="Not Found">
      <Section name="404">
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Clearly, you are lost.</p>
        <button onClick={back}>Back</button>
      </Section>
    </Page>
  );
}
