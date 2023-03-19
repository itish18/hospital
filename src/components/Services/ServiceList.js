import React from "react"

import ServiceListItem from "./ServiceListItem"
import * as styles from "./ServiceList.module.css"

import tooth from "../../images/tooth.png"
import brain from "../../images/brain.png"
import lungs from "../../images/lungs.png"
import report from "../../images/report.png"

const ServiceList = () => {
  const list = [
    { src: tooth, tag: "Dental Care" },
    { src: lungs, tag: "Pulmonary" },
    { src: brain, tag: "Neurological" },
    { src: report, tag: "Prediatrics" },
  ]

  return (
    <div className={styles.container}>
      {list.map((l, i) => (
        <ServiceListItem key={i} tag={l.tag} src={l.src} />
      ))}
    </div>
  )
}

export default ServiceList
