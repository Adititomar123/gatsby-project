import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

function About() {
  return (
    <Layout>
      <div>
        <h1>About page</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className={styles.wrapper}>
         <picture>
          {/* <source type="image/webp" srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=414&amp;fm=webp 414w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=828&amp;fm=webp 828w,"  sizes="100vw"/> */}

          <img alt="big banner" loading="eager" width="414" height="414" srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=414," sizes="100vw" className={styles.image}/>
      
         </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
