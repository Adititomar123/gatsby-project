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
          <source media="(min-width: 1440px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440&amp;fm=webp 1440w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880&amp;fm=webp 2x" type="image/webp" />

          <source media="(min-width: 1440px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440 1440w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880 2880w" />

          <source media="(min-width: 768px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219&amp;fm=webp 1219w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1600&amp;fm=webp 1600w" type="image/webp" />

          <source media="(min-width: 768px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219 1219w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1600 1600w" />

          <source media="(min-width: 414px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=767&amp;fm=webp 767w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=828&amp;fm=webp 828w" type="image/webp" />

          <source media="(min-width: 414px)" srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=767 767w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=828 828w" />

          <source srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=767&amp;fm=webp 767w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=828&amp;fm=webp 828w" type="image/webp" />

          <source srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=767 767w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=828 828w" />

          <img src="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374" alt="Netflix Product Marketing - Featured Image (Landscape)" className={styles.image} width="740" height="740" loading="lazy" />
         </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
