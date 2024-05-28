import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../../styles/projects.module.css'

function Projects({data}) {
console.log(data);
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites i've created</h3>
        <div className={styles.projects}>
          { projects.map(project=> (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{ project.frontmatter.title }</h3>
              <p>{ project.frontmatter.stack}</p>
            </div>
          </Link>
          )) }
        </div>
        <p>Like what you see? Email me at {contact} </p>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql `
query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`
