import * as React from "react"
import * as styles from "./header.module.css"

const Header = ({ showButton }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>
      <span className={styles.titleLeftPart}>Medi</span>
      <span className={styles.titleRightPart}>Care+</span>
    </h3>
    <div className={showButton ? styles.list : styles.footerList}>
      <ul className={showButton ? styles.unorderedList : styles.footerUnList}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>News</li>
      </ul>
      {showButton && <button className={styles.contactButton}>Contact</button>}
    </div>
  </div>
)

export default Header
