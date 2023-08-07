import React from 'react'

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
  return (
    <section className={styles.Contact} id={id}>
      <header className={styles.Header}>contact & resume</header>
      <article className={styles.Article}>
        <p>
          my github profile:{' '}
          <a
            className={styles.Link}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {githubUrl}
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
