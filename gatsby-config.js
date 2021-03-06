module.exports = {
  siteMetadata: {
    title: 'Hiring Platform',
    description: `hire`,
    author: `@kkarkos`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
