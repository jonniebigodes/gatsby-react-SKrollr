import React from "react"
import Layout from '../components/layout'
import Loadable from "react-loadable"


const loader=()=>(<div>Loading about content.....</div>)
const MyParallaxComponent = Loadable({
  loader: () => import("../components/LoadableParallax"),
  loading: loader,
})
const AboutPage = () => {
  return (
    <Layout className="about">
      <MyParallaxComponent />
    </Layout>
  )
}

export default AboutPage
