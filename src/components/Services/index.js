import React from "react"

import ServiceList from "./ServiceList"
import * as styles from "./index.module.css"

const Service = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Our Services</h3>
      <p className={styles.content}>
        We provide the most full medical services, so every person could heave
        the oppurtunity to receive qualitative medical help.
      </p>
      <ServiceList />
    </div>
  )
}

export default Service
