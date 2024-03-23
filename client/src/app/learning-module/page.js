import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.logo}>SignSpell</div>
            </div>
            <div className={styles.links}>
                <Link className={styles.link2} href='/learning-module'>Learning Modules</Link>
                <Link className={styles.link} href='/letter-signing'>Letter Signing</Link>
                {/* <Link className={styles.link} href='/'>Word Signing</Link> */}
            </div>
        </div>
    </div>
  );
}
