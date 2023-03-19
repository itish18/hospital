import * as React from "react"

import Left from "../Welcome/left"
import FacilityItem from "./FacilityItem"
import ladyDoc from "../../images/LadyDoctor.png"
import Doctor from "../../images/Doctor.png"
import Ambulance from "../../images/Ambulance.png"
import * as styles from "./index.module.css"

const Facilities = () => {
  return (
    <div className={styles.container}>
      <Left
        tagline="Clinic With Innovative"
        content="We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help."
        button={false}
      />
      <div className={styles.container2}>
        <FacilityItem
          src={ladyDoc}
          tag="Qualified Doctors"
          smallImage={false}
        />
        <div className={styles.singleItemTrans}>
          <FacilityItem src={Doctor} tag="Emergency Care" smallImage={false} />
        </div>
        <FacilityItem
          src={Ambulance}
          tag="24 Hours Service"
          smallImage={true}
        />
      </div>
    </div>
  )
}

export default Facilities
