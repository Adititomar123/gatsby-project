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
        <div classname={styles.wrapper}>
         <picture>
            

            <img
              srcset="
                https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=480 480w,
                https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=768 768w,
                https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1024 1024w,
                https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440 1440w,
                https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880 2880w
              "
              sizes="
                (max-width: 767px) calc(100vw - 40px),
                (max-width: 1199px) calc(100vw - 80px),
                calc(100vw - 100px)
              "
              src="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374"
              alt="Description of the image"
              className={styles.image}
            />
        </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
