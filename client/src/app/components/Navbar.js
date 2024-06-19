import styles from "./page.module.css";


export default function Navbar() {

    return(
        <div className={styles.nav}>
          <div className={styles.logo}>
  
          </div>
          <div className={styles.links}>
            <div className={styles.link}>Home</div>
            <div className={styles.link}>About</div>
            <div className={styles.link}>Contact</div>
          </div>
        </div>
    )

}
