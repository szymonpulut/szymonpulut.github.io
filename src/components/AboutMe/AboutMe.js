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
            I&apos;m 22 years old. I am a web developer based in Cracow, Poland.
            My focus is mostly on front end (I love React) but I also know the
            basics of devops &amp; back end development and am always excited to
            learn more! After short journey in native mobile programming in both
            Java and Swift, I also touched multiplatform mobile app development
            in React Native.
          </p>
          <p>
            I love creating clean, concise and beautiful code. I started
            programming for fun when I was a child, and to this day I never
            stopped - the &quot;fun&quot; part didn&apos;t stop either :D
            Nowadays I study computer science at Jagiellonian University in
            Krakow, where I learn a lot more than just programming.
          </p>
          <p>
            In my free time I enjoy brewing coffee. I also am passionate about
            DIY projects related to computers and electronics. I&apos;m really
            proud of creating a custom smart home system on Raspberry Pi and
            Arduino based ESP8266 devices.
          </p>
          <p>
            My passion for web development began when I was young - I started
            creating websites with WYSIWYG editors. I moved on to more complex
            websites in HTML and CSS. Afterwards I learned basics of PHP and
            MySQL databases. Then I moved onto Wordpress and other CMS, and also
            started learning JavaScript which I to this day enjoy. I started
            professional work as web developer, mostly in TypeScript &amp;
            React, later I learned the ropes of basic DevOps.
          </p>
          <p>
            Besides web development I have some experience with programming in
            C, OOP in C++ and Java. I also learned FPGA programming in Xilinx
            Vivado toolchain during my academic studies which I enjoyed as well.
            I learned the basics of coding Android &amp; iOS apps in native
            languages too.
          </p>
        </article>
        <article className={styles.Technologies}>
          I am comfortable with:
          <ul>
            <li>JavaScript &amp; TypeScript</li>
            <li>(advanced) React</li>
            <li>
              Hooks &amp; Context, React Query, Redux (thunk &amp; basic saga), io-ts
            </li>
            <li>Ant Design, Material-UI, styled-components, CSS modules</li>
            <li>Docker, Terraform, CI/CD, cloud services</li>
            <li>HTML5, CSS3</li>
          </ul>
          I have prior experience with:
          <ul>
            <li>back end development in PHP &amp; Node.js stacks</li>
            <li>database design, Postgres, MySQL, MongoDB</li>
            <li>React Native with Expo &amp; PWA</li>
            <li>building Android (Java) &amp; iOS (Swift) apps</li>
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
