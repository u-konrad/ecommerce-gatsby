module.exports = {
  siteMetadata: {
    title: `Clothing Online Store`,
    description: `Zapraszamy do zakupów odzieży w naszym sklepie internetowym.`,
    author: `Konrad Urbańczyk`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `30382ra23mzv`,
        accessToken:`r1HrWdnO4JFLQ_uskHRiJhZG_yd0cVX--udpiclCtmo`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
  ],
}
