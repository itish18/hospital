import * as React from "react"

import Left from "./left"
import Right from "./right"

import * as styles from "./content.module.css"

const Content = () => {
  return (
    <div className={styles.container}>
      <Left
        title="Welcome to MediCare+ Clinic"
        tagline="Best Specialists"
        content="  We are on the leading edge of cancer care. Providing the full continuum
        of cancer treatments and supportive care services in a single convenient
        location."
        button={true}
      />
      <Right />
    </div>
  )
}

export default Content
