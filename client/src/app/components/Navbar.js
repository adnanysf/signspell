'use client';
import styles from "./nav.module.css";
import Link from 'next/link'


export default function Navbar(props) {
    return(
        <div className={styles.nav}>
          <Link href='/' className={styles.navTitle}>
            SignSpell
          </Link>
          <div className={styles.links}>
            <Link href='/' className={props.page == "Home" ? styles.activelink  : styles.link }>Home</Link>
            <Link href='/learningmod' className={props.page == "LearningModule" ? styles.activelink : styles.link}>Learning Module</Link>
            <div className={styles.link}>Letter Test</div>
            <div className={styles.link}>Word Test</div>
          </div>
        </div>
    )

}
