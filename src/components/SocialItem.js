import React from "react"

import * as styles from "./SocialItem.module.css"

const SocialItem = ({ icon }) => {
  return <div className={styles.container}>{icon}</div>
}

export default SocialItem
