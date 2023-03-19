import React from "react"

import * as styles from "./FacilityItem.module.css"

const FacilityItem = ({ src, tag, smallImage }) => {
  return (
    <div className={styles.container}>
      <img
        src={src}
        alt="doc"
        className={!smallImage ? styles.image : styles.smallImage}
      />
      <span className={!smallImage ? styles.tag : styles.smallTag}>{tag}</span>
    </div>
  )
}

export default FacilityItem
