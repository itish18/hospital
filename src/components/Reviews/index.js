import React, { useEffect, useState } from "react"
import axios from "axios"

import * as styles from "./index.module.css"

import ReviewItem from "./ReviewItem"

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController()
        const signal = controller.signal
        const { data } = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1",
          { signal }
        )
        setReviews(data?.data)
        return () => controller.abort()
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>What Our Customers Say</h3>
      <div className={styles.reviewList}>
        {reviews?.map((item, i) => (
          <ReviewItem
            key={i}
            review={item.Reviews}
            name={item.Name}
            company={item.Company}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews
