import React from "react"

import * as styles from "./NewsLetter.module.css"

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.box}>
        <span className={styles.heading}>Subscribe to Newsletter</span>
        <span className={styles.subHead}>
          We have a wide experience in experience design and strategy,
        </span>
        <div className={styles.inputBox}>
          <input
            type="email"
            className={styles.email}
            placeholder="Enter your email address"
          />
          <button className={styles.button}>Send Now</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
