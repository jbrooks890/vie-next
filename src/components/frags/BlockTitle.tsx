import styles from "../../styles/BlockTitle.module.css";

type PropsType = {
  title: string;
  subtitle?: string;
};

export default function BlockTitle({ title, subtitle }: PropsType) {
  return (
    <div className={`${styles["block-title"]} flex col`}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
