require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, //${process.env.NODE_ENV}
})

module.exports = {
  siteMetadata: {
    title: `Pozytywka ODT`,
    description: `Zajmujemy się terapią autyzmu`,
    author: `@marcinkula`,
    siteUrl: `https://www.pozytywka.slask.pl/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { },
        base64Width: 40,
        defaultQuality: 80,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `strona-pozytywka`,
        short_name: `pozytywka`,
        start_url: `/`,
        background_color: `#003759`,
        theme_color: `#003759`,
        display: `minimal-ui`,
        icon: `src/images/pozytywka-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/ // 349ns dpfb89 3tga!
        }
      }
    },
    {
      // https://www.npmjs.com/package/gatsby-source-storyblok
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_API_KEY,
        version: process.env.STORYBLOK_ENV_VERSION,
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
