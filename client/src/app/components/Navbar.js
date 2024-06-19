'use client';
import styles from "./page.module.css";
import Link from 'next/link'


export default function Navbar(props) {
    return(
        <div className={styles.nav}>
          <div className={styles.navTitle}>
            SignSpell
          </div>
          <div className={styles.links}>
            <Link href='/' className={props.page == "Home" ? styles.activelink  : styles.link }>Home</Link>
            <Link href='/learningmod' className={props.page == "LearningModule" ? styles.activelink : styles.link}>Learning Module</Link>
            <div className={styles.link}>Letter Test</div>
            <div className={styles.link}>Word Test</div>
          </div>
        </div>
    )

}
