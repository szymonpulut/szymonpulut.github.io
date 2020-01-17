import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

const Contact = ({ id }) => {
    return (
        <section className={styles.Contact} id={id}>
            <header className={styles.Header}>contact & resume</header>
            <article className={styles.Article}>
                <p>send me an email: szymon.pulut@gmail.com</p>
                <p>
                    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                    download my{' '}
                    <a className={styles.Link} href="/cv_pulut_szymon.pdf">
                        resume
                    </a>
                </p>
                <p>
                    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                    or maybe check out my{' '}
                    <a className={styles.Link} href="/">
                        longer history
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
