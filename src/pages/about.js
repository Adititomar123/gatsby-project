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
          <source type="image/webp" srcSet="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374&amp;fm=webp 374w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=748&amp;fm=webp 748w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=722&amp;fm=webp 722w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1444&amp;fm=webp 1444w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219&amp;fm=webp 1219w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2438&amp;fm=webp 2438w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440&amp;fm=webp 1440w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880&amp;fm=webp 2880w"  sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 80px), 85vw"/>

          <img alt="big banner" loading="eager" width="374" height="374" srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374 374w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=748 748w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=722 722w, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1444 1444w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219 1219w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2438 2438w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440 1440w, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880 2880w" sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 80px), 85vw" className={styles.image}/>
      
         </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
