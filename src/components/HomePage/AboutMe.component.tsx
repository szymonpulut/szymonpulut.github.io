import Image from 'next/image'

import styles from './AboutMe.component.module.scss'

interface AboutMeComponentProps {
  id: string
  headerMotto: string
  description: string
  technologies: { advanced: string[]; basic: string[] }
}

const AboutMeComponent: React.FC<AboutMeComponentProps> = ({
  id,
  headerMotto,
  description,
  technologies,
}) => {
  return (
    <section className={styles.AboutMe} id={id}>
      <header className={styles.HeaderMotto}>{headerMotto}</header>
      <header className={styles.Header}>about me</header>
      <section className={styles.Content}>
        <article className={styles.Description}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </article>
        <article className={styles.Technologies}>
          I am proficient in:
          <ul>
            {technologies.advanced.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          I have prior experience with:
          <ul>
            {technologies.basic.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </article>
        <div className={styles.ImageDiv}>
          <Image
            src="/images/researching.svg"
            alt="programming - a man and source code"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>
    </section>
  )
}

export default AboutMeComponent
