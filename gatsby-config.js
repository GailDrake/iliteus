module.exports = {
  plugins: [
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-instagram',
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`,
          `Montserrat`,
          `Lato`,
          `Verdana`,
          `Raleway`,
          `Raleway ExtraLight` // you can also specify font weights and styles
        ]
      }
    }
  ]
};