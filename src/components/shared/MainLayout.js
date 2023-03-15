import Header from "./Header";
import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <div id="siteWrapper" className="flex col theme checker-bg">
      <Header />
      <main>{children}</main>
    </div>
  );
}
