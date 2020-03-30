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
                        <span role="img" aria-label="waving hand emoji">
                            👋
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        </span>{' '}
                        I&apos;m 21 years old. I am a web developer based in
                        Krakow, Poland. My focus is mostly on front-end (in
                        React), but I also know the basics of back-end
                        development and am always excited to learn more!
                    </p>
                    <p>
                        I love creating clean, concise and beautiful code. After
                        falling in love with JavaScript I am navigating through
                        the depths of React, paired with TypeScript and Redux.
                        Also started looking at react-native :)
                    </p>
                    <p>
                        In my free time I enjoy brewing and learning about
                        coffee. I also am passionate about DIY projects related
                        to computers and electronics. I&apos;m really proud of
                        creating a custom smart home system on Raspberry Pi and
                        Arduino based ESP8266 devices.
                    </p>
                    <p>
                        My passion for web development began when I was young -
                        I started creating websites with WYSIWYG editors. I then
                        moved on to a bit more complex websites in HTML and CSS.
                        Later on I learned basics of PHP and MySQL databases.
                        Then moved onto Wordpress and other CMS, and also
                        started learning JavaScript which I immensely enjoy.
                    </p>
                    <p>
                        Besides web development I have some experience with
                        programming in C, OOP in Java and C++, and FPGA
                        programming in Xilinx Vivado toolchain acquired during
                        my academic studies and further practiced on my own. I
                        did also learn the basics of coding Android & iOS apps.
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
                        <li>back end development in PHP & Node.js</li>
                        <li>databases: MySQL, MongoDB</li>
                        <li>creating PWAs</li>
                        <li>building Android (Java) & iOS (Swift) apps</li>
                        <li>OOP in Java and C++</li>
                    </ul>
                </article>
                <div className={styles.ImageDiv}>
                    <img
                        src={researchingImage}
                        alt="programming - a man and source code"
                    />
                </div>
            </section>
        </section>
    );
};

AboutMe.propTypes = {
    id: PropTypes.string.isRequired,
};

export default AboutMe;
