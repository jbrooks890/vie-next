import { ReactElement } from "react";

type PropsType = {
  children: ReactElement | ReactElement[];
  name: string;
  id?: string;
  className?: string;
  type?: string;
  banner?: string;
  theme?: string;
};

export default function Page({
  children,
  name,
  id = name.toLowerCase().replaceAll(" ", "-").trim(),
  className,
  type = "index",
  banner,
  theme,
}: PropsType) {
  return (
    <div
      id={`${id}-page ${id ?? ""}`}
      className={`page ${type} ${banner ? "with-banner" : "no-banner"} ${
        theme ? `theme ${theme}` : "no-theme"
      } ${className ?? ""}`}
      data-page-name={name}
    >
      {children}
    </div>
  );
}
