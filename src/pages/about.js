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
            <source media="(min-width: 1440px)" srcset="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440&amp;fm=webp 1x, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880&amp;fm=webp 2x" type="image/webp" />
            
            <source media="(min-width: 1440px)" srcset="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1440 1x, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2880 2x" />
            
            <source media="(min-width: 768px)" srcset="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219&amp;fm=webp 1x, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2438&amp;fm=webp 2x" type="image/webp" />
            
            <source media="(min-width: 768px)" srcset="https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=1219 1x, https://images.ctfassets.net/8fjb1swihtib/2QQJVt4aJJZZWyZs1wt8eE/67aebd838c27838e53bbb0e4f33559ea/Untitled_design__9_.png?w=2438 2x" />
            
            <source media="(min-width: 414px)" srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=722&amp;fm=webp 1x, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1444&amp;fm=webp 2x" type="image/webp" />
            
            <source media="(min-width: 414px)" srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=722 1x, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=1444 2x" />
            
            <source srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374&amp;fm=webp 1x, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=748&amp;fm=webp 2x" type="image/webp" />
            
            <source srcset="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374 1x, https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=748 2x" />
            
            <img src="https://images.ctfassets.net/8fjb1swihtib/4qpK9c95PhnngAiAHBQHi4/dcb57fa2b24bfad515105801f9e8a7ec/Tile_740x740_Netflix.png?w=374" alt="Netflix Product Marketing - Featured Image (Landscape)" className={styles.image} width="740" height="740" />
        </picture>
        </div>
      </div>
      
    </Layout>
  )
}

export default About
