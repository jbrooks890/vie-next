// import "../../styles/blocks/Exhibit.css";
// import styles from "@/styles/Exhibit.module.css";
import styles from "../../styles/Exhibit.module.css";
import { ReactElement } from "react";

type PropsType = {
  feature: JSX.Element;
  body: JSX.Element;
  width?: string;
  axis?: "horizontal" | "vertical";
  align?: "left" | "center" | "right" | "none";
  priority?: "feature" | "body" | "even";
  id?: string;
  className?: string;
};

export default function Exhibit({
  feature,
  body,
  width = "frame",
  axis = "horizontal",
  align = "center",
  priority = "even",
  id,
  className,
}: PropsType) {
  return (
    <div
      id={id ?? ""}
      className={`${styles.block} block flex ${
        axis === "vertical" ? "col" : ""
      }  ${styles[width + "-width"]} middle ${className ?? ""} ${
        priority === "even" ? styles.even : styles.priority
      }`}
      data-priority-element={priority !== "even" ? styles.priority : undefined}
    >
      <div
        className={`${styles["exhibit-feature"]} ${
          priority === styles.feature ? styles.priority : ""
        }`}
      >
        {feature}
      </div>
      <div
        className={`${styles["exhibit-body"]} exhibit-body flex col ${
          priority === styles.body ? styles.priority : ""
        }`}
      >
        {body}
      </div>
    </div>
  );
}
