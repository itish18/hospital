import React from "react"

import * as styles from "./DoctorItem.module.css"

const DoctorItem = ({ name, tag }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileBox}></div>
      <div className={styles.detailBox}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </div>
    </div>
  )
}

export default DoctorItem
