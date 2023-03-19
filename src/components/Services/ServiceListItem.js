import React, { useState } from "react"

import * as styles from "./ServiceListItem.module.css"

const ServiceListItem = ({ src, tag }) => {
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(prev => !prev)
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img className={styles.image} src={src} />
      <span className={styles.tag}>{tag}</span>

      {/* <div className={hover ? styles.learn : styles.displayLearn}>
        <span>LEARN MORE</span>
        <span>&#62;</span>
      </div> */}
    </div>
  )
}

export default ServiceListItem
