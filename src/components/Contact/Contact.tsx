import React from 'react'

import * as styles from './Contact.module.scss'

interface Props {
  id: string
}

const Contact: React.FC<Props> = ({ id }) => {
  return (
    <section className={styles.Contact} id={id}>
      <header className={styles.Header}>contact & resume</header>
      <article className={styles.Article}>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          my github profile:{' '}
          <a className={styles.Link} href="https://github.com/szymonpulut/">
            github.com/szymonpulut
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          </a>
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          send me an email: <a href="mailto:szymon.pulut@gmail.com">szymon.pulut@gmail.com</a>
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          download my{' '}
          <a className={styles.Link} href="pulut_szymon_cv.pdf">
            resume
          </a>
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}I also have a{' '}
          <a className={styles.Link} href="https://www.linkedin.com/in/szymonpulut/">
            LinkedIn profile
          </a>
        </p>
      </article>
    </section>
  )
}

export default Contact
