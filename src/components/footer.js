import React from "react"
import { GrFacebookOption, GrGoogle } from "react-icons/gr"
import { AiOutlineTwitter } from "react-icons/ai"

import SocialItem from "./SocialItem"

import * as styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.social}>
          <SocialItem
            icon={
              <GrFacebookOption color="#7F7F7F" width="9px" height="18px" />
            }
          />
          <SocialItem
            icon={<GrGoogle color="#7F7F7F" width="9px" height="18px" />}
          />
          <SocialItem
            icon={
              <AiOutlineTwitter color="#7F7F7F" width="9px" height="18px" />
            }
          />
        </div>
        <span className={styles.copy}>©2023 PodPayment - 2023</span>
      </div>
    </div>
  )
}

export default Footer
