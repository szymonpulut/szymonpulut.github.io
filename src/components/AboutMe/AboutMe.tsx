import React from 'react'

import researchingImage from 'images/researching.svg'

import * as styles from './AboutMe.module.scss'

interface Props {
  id: string
}

const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <section className={styles.AboutMe} id={id}>
      <header className={styles.HeaderMotto}>code; clarity; user-experience</header>
      <header className={styles.Header}>about me</header>
      <section className={styles.Content}>
        <article className={styles.Description}>
          <p>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Hi, I&apos;m Szymon{' '}
            <span role="img" aria-label="waving hand emoji">
              &#x1F44B;
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            </span>{' '}
            I&apos;m 23 years old. I am a frontend software engineer based in Cracow, Poland. My focus is mostly on
            frontend (I love React) but I also know the basics of devops &amp; back end development, and am always
            excited to learn more! After short journey in native mobile programming in both Java and Swift, I also
            touched multiplatform mobile app development in React Native.
          </p>
          <p>
            I love creating clean, concise and beautiful code. I started programming for fun when I was a child, and to
            this day I never stopped - the &quot;fun&quot; part didn&apos;t stop either :D I studied computer science at
            Jagiellonian University in Cracow, where I have learned a lot more than just programming.
          </p>
          <p>
            In my free time I enjoy brewing coffee. I also am passionate about DIY projects related to computers and
            electronics. I&apos;m really proud of creating a custom smart home system on Raspberry Pi and Arduino based
            ESP8266 devices.
          </p>
          <p>
            My passion for web development began when I was young - I started creating websites with WYSIWYG editors. I
            moved on to more complex websites in HTML and CSS. Afterwards I learned basics of PHP and MySQL databases.
            Then I moved onto Wordpress and other CMS, and also started learning JavaScript which I to this day enjoy. I
            started professional work as a frontend engineer, mostly in TypeScript &amp; React.
          </p>
          <p>
            Besides web development I have some experience with programming in C, OOP in C++ and Java. I also learned
            FPGA programming in Xilinx Vivado toolchain during my academic studies which I enjoyed as well. I learned
            the basics of coding Android &amp; iOS apps in native languages too.
          </p>
        </article>
        <article className={styles.Technologies}>
          I am comfortable with:
          <ul>
            <li>JavaScript &amp; TypeScript</li>
            <li>advanced React</li>
            <li>Hooks &amp; Context, React Query, Redux (thunk &amp; basic saga), io-ts</li>
            <li>Ant Design, Material-UI, styled-components, CSS modules</li>
            <li>Docker, Terraform, CI/CD (CircleCI)</li>
            <li>Cloud services (mainly AWS: S3, CloudFront, Lambda, EC2)</li>
            <li>HTML5, CSS3</li>
          </ul>
          I have prior experience with:
          <ul>
            <li>backend development in PHP &amp; Node.js stacks</li>
            <li>database design, Postgres, MySQL, MongoDB</li>
            <li>React Native with Expo &amp; PWA</li>
            <li>building Android (Java) &amp; iOS (Swift) apps</li>
            <li>OOP in C++ and Java</li>
            <li>FPGA programming in C &amp; C++</li>
          </ul>
        </article>
        <div className={styles.ImageDiv}>
          <img src={researchingImage} alt="programming - a man and source code" />
        </div>
      </section>
    </section>
  )
}

export default AboutMe
