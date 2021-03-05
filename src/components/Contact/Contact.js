import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

const Contact = ({ id }) => {
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
          </a>{' '}
          (a bit inactive - last updates before working @ Tango)
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          send me an email:{' '}
          <a href="mailto:szymon.pulut@gmail.com">szymon.pulut@gmail.com</a>
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          download my{' '}
          <a className={styles.Link} href="pulut_szymon_cv.pdf">
            resume
          </a>
        </p>
        <p>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          I also have a{' '}
          <a
            className={styles.Link}
            href="https://www.linkedin.com/in/szymonpulut/"
          >
            LinkedIn profile
          </a>
        </p>
      </article>
    </section>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
