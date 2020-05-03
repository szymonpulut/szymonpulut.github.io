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
                            &#xe695;
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        </span>{' '}
                        I&apos;m 21 years old. I am a web developer based in
                        Krakow, Poland. My focus is mostly on front end (I love
                        React) but I also know the basics of back end
                        development and am always excited to learn more! After
                        short journey in native mobile programming in both Java
                        and Swift, I am also learning multiplatform mobile app
                        development in React Native.
                    </p>
                    <p>
                        I love creating clean, concise and beautiful code. I
                        started programming for fun when I was a child, and to
                        this day I never stopped - the &quot;fun&quot; part
                        didn&apos;t stop either :D Nowadays I study computer
                        science at Jagiellonian University in Krakow, where I
                        learn a lot more than just programming.
                    </p>
                    <p>
                        In my free time I enjoy brewing coffee. I also am
                        passionate about DIY projects related to computers and
                        electronics. I&apos;m really proud of creating a custom
                        smart home system on Raspberry Pi and Arduino based
                        ESP8266 devices.
                    </p>
                    <p>
                        My passion for web development began when I was young -
                        I started creating websites with WYSIWYG editors. I
                        moved on to more complex websites in HTML and CSS.
                        Afterwards I learned basics of PHP and MySQL databases.
                        Then I moved onto Wordpress and other CMS, and also
                        started learning JavaScript which I to this day enjoy.
                    </p>
                    <p>
                        Besides web development I have some experience with
                        programming in C, OOP in C++ and Java. I also learned
                        FPGA programming in Xilinx Vivado toolchain during my
                        academic studies which I enjoyed as well. I learned the
                        basics of coding Android & iOS apps in native languages
                        too.
                    </p>
                </article>
                <article className={styles.Technologies}>
                    I am comfortable with:
                    <ul>
                        <li>ES6 JavaScript & TypeScript</li>
                        <li>(advanced) React</li>
                        <li>Hooks & Context, Redux (thunk & basic saga)</li>
                        <li>Material-UI, styled-components, CSS modules</li>
                        <li>HTML5, CSS3</li>
                    </ul>
                    I have prior experience with:
                    <ul>
                        <li>back end development in PHP & Node.js stacks</li>
                        <li>database design, Postgres, MySQL, MongoDB</li>
                        <li>React Native with Expo & PWA</li>
                        <li>building Android (Java) & iOS (Swift) apps</li>
                        <li>OOP in C++ and Java</li>
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
