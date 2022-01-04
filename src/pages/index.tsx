import React from 'react'

import Layout from 'hoc/Layout/Layout'
import AboutMe from 'components/AboutMe/AboutMe'
import Projects from 'components/Projects/Projects'
import Contact from 'components/Contact/Contact'

import 'styles/globalStyles.scss'

const IndexPage = () => {
  return (
    <React.StrictMode>
      <Layout>
        <AboutMe id="about-me" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Layout>
    </React.StrictMode>
  )
}

export default IndexPage
