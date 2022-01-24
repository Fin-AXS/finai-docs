module.exports = {
  pathPrefix: '/finai-docs',
  siteMetadata: {
    siteUrl: "https://finai-docs.github.io",
    title: "FinAI Docs",
    description: "This is the documentation site for FinAI Stack. There are guides for Admin and Developers. This site is not intended for end-customers, but for FinAI Admins and Developeres."
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: `carbon`,
              theme: `one-light`,
            },
          }
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `developer_docs`,
        path: `${__dirname}/src/docs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM+Sans\:400,500,400,700`,
        ],
        display: 'swap'
      }
    }
  ],
};