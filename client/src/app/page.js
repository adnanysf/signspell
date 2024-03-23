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
            <div className={styles.link}>Home</div>
            <div className={styles.link}>About</div>
            <div className={styles.link}>Contact</div>
          </div>
        </div>
        <div className={styles.topcont} >
          <h1 className={styles.title}>SignSpell</h1>
          <div className={styles.buttons}>
            <div className={styles.but}>Learn More</div>
            <div className={styles.but}>Play</div>
          </div>
        </div>
        
      </div>
      <div className={styles.botpage}>
        <h1>TEST</h1>
      </div>
  
    </div>
  );
}
