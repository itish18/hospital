import React from "react"
import { BsQuote } from "react-icons/bs"

import * as styles from "./ReviewItem.module.css"

const ReviewItem = ({ review, name, company, link }) => {
  const clickHandler = () => {
    window.open(link)
  }

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.quote}>
        <BsQuote color="white" size="30px" />
      </div>

      <p className={styles.review}>{review}</p>

      <div className={styles.profileBox}>
        <div className={styles.reviewBy}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{company}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
