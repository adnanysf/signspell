import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.logo}>SignSpell</div>
            </div>
            <div className={styles.links}>
                <div className={styles.link2}>Learning Modules</div>
                <div className={styles.link}>Letter Signing</div>
                <div className={styles.link}>Word Signing</div>
            </div>
        </div>
    </div>
  );
}
