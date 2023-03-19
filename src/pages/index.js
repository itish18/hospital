import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/Welcome/content"
import EmptyCircle from "../components/BackgroundCircles/EmptyCircle"
import FilledCircle from "../components/BackgroundCircles/FilledCircle"
import Service from "../components/Services"
import Facilities from "../components/Facility/index"
import Specialist from "../components/Specialist/index"
import Reviews from "../components/Reviews/index"
import NewsLetter from "../components/NewsLetter"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <EmptyCircle />
    <FilledCircle />
    <Content />
    <Service />
    <Facilities />
    <Specialist />
    <Reviews />
    <NewsLetter />
    <Header showButton={false} />
  </Layout>
)

export const Head = () => <Seo title="Hospital Landing Page" />

export default IndexPage
