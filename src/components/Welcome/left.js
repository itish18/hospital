import * as React from "react"

import * as styles from "./left.module.css"

const Left = ({ title, tagline, content, button }) => {
  return (
    <div className={styles.container}>
      <span className={styles.welcomeTitle}>{title}</span>
      <span className={title ? styles.tagline : styles.dynamicTagline}>
        {tagline}
      </span>
      <p className={styles.workContent}>{content}</p>
      <div className={styles.buttonBox}>
        {!button ? (
          <button className={styles.appointmentButton}>Learn More</button>
        ) : (
          <>
            <button className={styles.appointmentButton}>
              Make an Appointment
            </button>
            <button className={styles.depButton}>Departments</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Left
