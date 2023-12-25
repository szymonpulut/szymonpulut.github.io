import React from 'react'
import classNames from 'classnames'
import { usePlausible } from 'next-plausible'

import { robotoFont } from '@/app/fonts'

import styles from './Contact.component.module.scss'

interface ContactComponentProps {
  id: string
  githubUrl: string
  email: string
  resumeUrl: string
  linkedinUrl: string
}

const ContactComponent: React.FC<ContactComponentProps> = ({
  id,
  githubUrl,
  email,
  resumeUrl,
  linkedinUrl,
}) => {
  const plausible = usePlausible()

  const headerStyles = classNames([styles.Header, robotoFont.className])

  return (
    <section className={styles.Contact} id={id}>
      <header className={headerStyles}>contact & resume</header>
      <article className={styles.Article}>
        <p>
          my GitHub profile:{' '}
          <a
            className={styles.Link}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => plausible('gitHubVisit')}
          >
            github.com/szymonpulut
          </a>
        </p>
        <p>
          send me an email:{' '}
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>
        </p>
        <p>
          download my{' '}
          <a
            className={styles.Link}
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => plausible('resumeDownload')}
          >
            resume
          </a>
        </p>
        <p>
          visit my{' '}
          <a
            className={styles.Link}
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => plausible('linkedInVisit')}
          >
            LinkedIn profile
          </a>
        </p>
      </article>
    </section>
  )
}

export default ContactComponent
