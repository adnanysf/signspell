import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.main}>

      <div className={styles.toppage}>
        <Navbar />
        <div className={styles.topcont} >
          <h1 className={styles.title}>SignSpell</h1>
          <div className={styles.buttons}>
            <div className={styles.but}>Learn More</div>
            <div className={styles.but}>Play</div>
          </div>
        </div>
        
      </div>
      <div className={styles.botpage}>
        <div className={styles.scroll}>

          <div className={styles.line}> </div>

        </div>
        <div className={styles.botContent}>
        <div className={styles.botA}>
            <div className={styles.botCon}>
              <div className={styles.botTitle}>
                <h1>Learning Modules</h1>
              </div>
              <div className={styles.botText}>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec auctor, nisi nec ultricies tincidunt, augue orci 
                  ultricies lectus, nec vehicula purus nisi ac nisl. 
                  Donec auctor, nisi nec ultricies tincidunt, augue orci 
                  ultricies lectus, nec vehicula purus nisi ac nisl.
                </p>
              </div>
              <div className={styles.botBut}>
                <div className={styles.realBut}><p>Play Now!</p></div>
                
              </div>
            </div>
            <div className={styles.botPhoto}></div>
          </div>
          <div className={styles.botA}>
            <div className={styles.botCon}>
              <div className={styles.botTitle}>
                <h1>Learning Modules</h1>
              </div>
              <div className={styles.botText}>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec auctor, nisi nec ultricies tincidunt, augue orci 
                  ultricies lectus, nec vehicula purus nisi ac nisl. 
                  Donec auctor, nisi nec ultricies tincidunt, augue orci 
                  ultricies lectus, nec vehicula purus nisi ac nisl.
                </p>
              </div>
              <div className={styles.botBut}>
                <div className={styles.realBut}><p>Play Now!</p></div>
              </div>
            </div>
            <div className={styles.botPhoto}></div>
          </div>
   
        </div>


      </div>
  
    </div>
  );
}
