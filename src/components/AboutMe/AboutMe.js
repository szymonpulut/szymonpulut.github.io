import React from 'react';
import PropTypes from 'prop-types';

import researchingImage from 'images/researching.svg';

import styles from './AboutMe.module.scss';

const AboutMe = ({ id }) => {
    return (
        <section className={styles.AboutMe} id={id}>
            <header className={styles.HeaderMotto}>
                code; clarity; user-experience
            </header>
            <header className={styles.Header}>about me</header>
            <section className={styles.Content}>
                <article className={styles.Description}>
                    <p>
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Hi, I&apos;m Szymon{' '}
                        <span role="img" aria-label="waving hand">
                            👋
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        </span>{' '}
                        I&apos;m 21 years old. I work as a web developer in
                        Krakow, Poland. Currently I am working in React.
                    </p>
                    <p>
                        I love creating clean, concise and beautiful code. Fell
                        in love with JavaScript once, now am navigating through
                        the depths of React library, paired with TypeScript and
                        Redux.
                    </p>
                    <p>
                        In my free time I enjoy brewing and learning about
                        coffee and doing DIY projects related to computers and
                        electronics. I&apos;m really proud of creating a custom
                        smart home system on Raspberry Pi and Arduino based
                        ESP8266 devices.
                    </p>
                    <p>
                        My passion for web development began early, when I
                        started creating websites with WYSIWYG editors. I then
                        moved on to a bit more complex websites in HTML and CSS.
                        Later on I learned basics of PHP and MySQL databases.
                        Then moved onto Wordpress and Drupal. Finally I started
                        learning JavaScript which I immensely enjoy.
                    </p>
                    <p>
                        Besides web development I have some experience with
                        programming in C, OOP in Java and C++, and FPGA
                        programming in Xilinx Vivado toolchain.
                    </p>
                </article>
                <article className={styles.Technologies}>
                    I am comfortable with:
                    <ul>
                        <li>HTML5 + CSS3</li>
                        <li>ES6 JavaScript</li>
                        <li>TypeScript</li>
                        <li>React + Redux (thunk & basic saga)</li>
                    </ul>
                    I have prior experience with:
                    <ul>
                        <li>Progressive Web Apps</li>
                        <li>building Android (Java) & iOS (Swift) apps</li>
                        <li>OOP in Java and C++</li>
                    </ul>
                </article>
                <div className={styles.ImageDiv}>
                    <img src={researchingImage} />
                </div>
            </section>
        </section>
    );
};

AboutMe.propTypes = {
    id: PropTypes.string.isRequired,
};

export default AboutMe;
