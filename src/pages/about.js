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
        
         <source type="image/webp" srcset="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=360&amp;fm=webp 360w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=600&amp;fm=webp 600w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1200&amp;fm=webp 1200w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440&amp;fm=webp 1440w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880&amp;fm=webp 2880w" sizes="100vw" />
         <img alt="Homepage banner" loading="eager" width="360" height="360" srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=360 360w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=710 720w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=600 600w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1200 1200w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1440 1440w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=2880 2880w" src="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=360.jpg" sizes="100vw"  className={styles.image} />



        </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
