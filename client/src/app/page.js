import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>

      <div className={styles.toppage}>
        <div className={styles.nav}>
          <div className={styles.logo}>
  
        </div>
          <div className={styles.links}>
            <div className={styles.link}>Learning Modules</div>
            <div className={styles.link}>Letter Signing</div>
            <div className={styles.link}>Word Signing</div>
          </div>
        </div>
        <div className={styles.topcont} >
          <h1 className={styles.title}>SignSpell</h1>
          <div className={styles.buttons}>
            <div className={styles.but}>Learn ASL</div>
            <div className={styles.but2}>Play now!</div>
          </div>
        </div>
        
      </div>
      <div className={styles.botpage}>
        <h1>TEST</h1>
      </div>
  
    </div>
  );
}
