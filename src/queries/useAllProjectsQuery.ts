import { useStaticQuery, graphql } from 'gatsby'

const useAllProjectsQuery = () =>
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___priority] }
        filter: { fileAbsolutePath: { regex: "/(projects)/.*.md$/" } }
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
                  gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
            html
          }
        }
      }
    }
  `)

export default useAllProjectsQuery
