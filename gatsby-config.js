module.exports = {
  siteMetadata: {
    title: `Koala`,
    description: `koaladao is a delegated yield aggregator`,
    author: `@koaladao`,
    image: "/og-image.png",
    url: "https://koaladao.com",
    twitterUsername: "@koaladao_",
    siteUrl: "https://koaladao.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-postcss',
         options: {
             postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
          },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://koaladao.com',
        sitemap: 'https://koaladao.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KoalaDAO`,
        short_name: `koaladao`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/images/k.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["AFont", "AFont-Ex"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-transformer-remark`,
    //`gatsby-plugin-offline`,
  ],
}
