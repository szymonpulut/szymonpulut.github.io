import React, { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Modal from 'hoc/Modal/Modal'
import useInWindow from 'hooks/useInWindow'
import useAllProjectsQuery from 'queries/useAllProjectsQuery'
import { SingleProjectModel } from 'models/Projects'

import SingleProject from './SingleProject/SingleProject'

import * as styles from './Projects.module.scss'

interface Props {
  id: string
}

const Projects: React.FC<Props> = ({ id }) => {
  const [showModal, setShowModal] = useState(false)
  const [currentProjectSlug, setCurrentProjectSlug] = useState(undefined)

  const allProjectsQuery = useAllProjectsQuery()

  const projects: { [slug: string]: SingleProjectModel } = {}

  const toggleShowModal = (show: boolean, projectSlug = undefined): void => {
    setCurrentProjectSlug(projectSlug ?? undefined)
    setShowModal(show)
  }

  useInWindow(() => {
    const targetElement = document.querySelector('#modal')

    if (showModal && targetElement) {
      disableBodyScroll(targetElement, { reserveScrollBarGap: true })
    } else if (targetElement) {
      enableBodyScroll(targetElement)
    }
  })

  allProjectsQuery.allMarkdownRemark.edges.forEach((edge: any) => {
    const { title: projectName, technologies, slug, shortDesc, headerImage } = edge.node.frontmatter

    projects[`${slug}`] = {
      headerImage: headerImage.childImageSharp.gatsbyImageData,
      projectName: projectName,
      technologiesUsed: technologies,
      onClick: () => {
        toggleShowModal(true, slug)
      },
      slug,
      shortDesc,
      innerHtml: edge.node.html,
    }
  })

  return (
    <section className={styles.Projects} id={id}>
      <header className={styles.Header}>projects</header>

      {projects[`${currentProjectSlug}`] ? (
        <Modal
          show={showModal}
          closeModal={() => {
            toggleShowModal(false)
          }}
          headerImage={projects[`${currentProjectSlug}`].headerImage}
          innerHtml={projects[`${currentProjectSlug}`].innerHtml}
          projectName={projects[`${currentProjectSlug}`].projectName}
          technologies={projects[`${currentProjectSlug}`].technologiesUsed}
        />
      ) : null}

      <article className={styles.Article}>
        {Object.values(projects).map(project => (
          <SingleProject
            headerImage={project.headerImage}
            projectName={project.projectName}
            technologiesUsed={project.technologiesUsed}
            onClick={project.onClick}
            key={project.slug}
          >
            {project.shortDesc}
          </SingleProject>
        ))}
      </article>
    </section>
  )
}

export default Projects
