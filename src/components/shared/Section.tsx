import styles from "../../styles/Section.module.css";
import { ReactElement } from "react";

type PropsType = {
  children: ReactElement | ReactElement[];
  name: string;
  id?: string;
  className?: string;
  type?: string;
  layout?: string;
  banner?: string;
  theme?: string;
};

export default function Section({
  children,
  name,
  id = name?.toLowerCase().replaceAll(" ", "-").trim(),
  className,
  type = "regular",
  layout = "cascade",
  banner,
  theme,
}: PropsType) {
  const typeHandler = () => {
    switch (type) {
      case "regular":
        break;
      case "landing":
        break;
      case "wide":
        break;
    }
  };

  return (
    <section
      id={`${id}-section ${id ?? ""}`}
      className={`${styles.section} section ${className ?? ""} ${
        banner ? "with-banner" : "no-banner"
      } ${theme ? `theme ${theme}` : "no-theme"} ${type} ${
        type === "landing" ? "center" : ""
      }`}
      data-section-name={name}
      data-section-type={type}
      data-banner-src={banner ?? undefined}
      style={banner ? { backgroundImage: `url(${banner})` } : undefined}
    >
      {children}
    </section>
  );
}
