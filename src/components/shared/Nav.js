import styles from "../../styles/Nav.module.css";
import Link from "next/link";
import useNav from "../../hooks/useNav";

export default function Nav() {
  const { mainNav } = useNav();

  const renderNav = obj => {
    return Object.entries(obj).map(([display, content], i) => {
      return (
        <Link key={i} href={content}>
          {display}
        </Link>
      );
    });
  };

  return (
    <nav className={`${styles.nav} flex middle theme`}>
      {renderNav(mainNav)}
    </nav>
  );
}
