import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from 'gatsby-image';
import * as styles from '../styles/home.module.css'

export default function Home({data}) {
  console.log(data);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer</p>
          <Link className={styles.btn} to="/projects">My portfolio projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql `
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`
