import React from 'react'
import classNames from 'classnames'

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
          >
            LinkedIn profile
          </a>
        </p>
      </article>
    </section>
  )
}

export default ContactComponent
