import React from "react"

import * as styles from "./index.module.css"
import DoctorItem from "./DoctorItem"

const Specialist = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.emptyCircle}></div>
        <h3 className={styles.heading}>We Have The Best Specialist</h3>
        <p className={styles.content}>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
        <div className={styles.profileList}>
          <DoctorItem name="Dr. Awaatif Al" tag="Dental Care" />
          <DoctorItem name="Dr. Filipa Gaspar" tag="Cardiology" />
          <DoctorItem name="Dr. Sukhmeet Gorae" tag="Neurological" />
          <DoctorItem name="Dr. Siri Jakobsson" tag="Prediatrics" />
        </div>
      </div>
    </>
  )
}

export default Specialist
