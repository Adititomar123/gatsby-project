import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import {GatsbyImage, getImage }  from "gatsby-plugin-image";
import * as styles from '../styles/home.module.css'

export default function Home({data}) {
  console.log(data);
  const {title, subTitle, heroImage} = data.contentfulHome
  const { description: { raw } } = data.contentfulHome;
  const parsedDescription = JSON.parse(raw);

  const image = getImage(heroImage);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <p>{parsedDescription.content[0].content[0].value}</p>
          <Link className={styles.btn} to="/projects">My portfolio projects</Link>
        </div>
        <GatsbyImage image={image} alt={heroImage.description} />
      </section>
    </Layout>
  )
}

export const query = graphql `
 query HomePage {
  contentfulHome {
    title
    subTitle
    heroImage {
      gatsbyImageData(layout: FULL_WIDTH)
      description
    }
     description {
      raw
    }
  }
}`
