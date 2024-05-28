/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-remark`,// dont need a object here just basic one
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
  ],
  siteMetadata: {
    title: 'Web warrior',
    description: 'web dev portfolio',
    copyright: 'this website is copyright 2021 web warrior',
    contact: 'adititomar@toaster.co'
  }
}
