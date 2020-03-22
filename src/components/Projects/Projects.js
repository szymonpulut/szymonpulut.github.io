import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';

import Modal from 'hoc/Modal/Modal';

import SingleProject from './SingleProject/SingleProject';

import styles from './Projects.module.scss';

const Projects = ({ id }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentProjectSlug, setCurrentProjectSlug] = useState('undefined');

    let projectData = {};

    const showModalHandler = (show, projectSlug = null) => {
        if (show) {
            setCurrentProjectSlug(projectSlug);
        }
        setShowModal(show);
    };

    if (typeof document !== 'undefined') {
        const targetElement = document.querySelector('#modal');

        if (showModal) {
            disableBodyScroll(targetElement, { reserveScrollBarGap: true });
        } else {
            enableBodyScroll(targetElement);
        }
    }

    const query = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___priority] }
                filter: {fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}}
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            technologies
                            priority
                            slug
                            shortDesc
                            headerImage {
                                childImageSharp {
                                    fluid(maxWidth: 720) {
                                      ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        html
                    }
                }
            }
        }
    `);

    const projects = [];
    query.allMarkdownRemark.edges.forEach(edge => {
        const {
            title: projectName,
            technologies,
            slug,
            shortDesc,
            headerImage,
        } = edge.node.frontmatter;

        const headerImageFluid =
            headerImage == null ? '' : headerImage.childImageSharp.fluid;

        projects.push(
            <SingleProject
                headerImage={headerImageFluid}
                projectName={projectName}
                technologiesUsed={technologies}
                clicked={() => {
                    showModalHandler(true, slug);
                }}
                key={slug}
            >
                {shortDesc}
            </SingleProject>,
        );

        projectData = {
            ...projectData,
            [`headerImage.${slug}`]: headerImageFluid,
            [`projectName.${slug}`]: projectName,
            [`technologies.${slug}`]: technologies,
            [`html.${slug}`]: edge.node.html,
        };
    });

    const modal = (
        <Modal
            show={showModal}
            closeModal={() => {
                showModalHandler(false);
            }}
            headerImage={projectData[`headerImage.${currentProjectSlug}`]}
            inner={projectData[`html.${currentProjectSlug}`]}
            projectName={projectData[`projectName.${currentProjectSlug}`]}
            technologies={projectData[`technologies.${currentProjectSlug}`]}
        />
    );

    return (
        <section className={styles.Projects} id={id}>
            <header className={styles.Header}>projects</header>
            {modal}
            <article className={styles.Article}>{projects}</article>
        </section>
    );
};

Projects.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Projects;
