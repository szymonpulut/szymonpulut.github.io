import type { InferGetStaticPropsType } from 'next'

import { getAboutMeData, getContactData } from '@/lib/content.api'

import AboutMeComponent from '../components/HomePage/AboutMe.component'
import ContactComponent from '../components/HomePage/Contact.component'

import PageLayout from './layout'

import styles from './index.page.module.scss'

interface IndexPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const IndexPage: React.FC<IndexPageProps> = ({ aboutMeData, contactData }) => {
  return (
    <PageLayout>
      <main className={styles.Container}>
        <AboutMeComponent
          id="about-me"
          headerMotto={aboutMeData.headerMotto}
          description={aboutMeData.description}
          technologies={aboutMeData.technologies}
        />

        <ContactComponent
          id="contact"
          githubUrl={contactData.githubUrl}
          email={contactData.email}
          resumeUrl={contactData.resumeUrl}
          linkedinUrl={contactData.linkedinUrl}
        />
      </main>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const aboutMeData = await getAboutMeData()
  const contactData = await getContactData()

  return {
    props: {
      aboutMeData,
      contactData,
    },
  }
}
export default IndexPage
