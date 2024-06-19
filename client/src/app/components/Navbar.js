'use client';
import styles from "./page.module.css";


export default function Navbar(props) {
    return(
        <div className={styles.nav}>
          <div className={styles.logo}>
  
          </div>
          <div className={styles.links}>
            <div className={props.page == "Home" ? styles.activelink  : styles.link }>Home</div>
            <div className={styles.link}>Learning Module</div>
            <div className={styles.link}>Letter Test</div>
            <div className={styles.link}>Word Test</div>
          </div>
        </div>
    )

}
