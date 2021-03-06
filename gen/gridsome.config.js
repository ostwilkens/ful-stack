// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ful-stack',
  siteUrl: 'https://ostwilkens.github.io',
  pathPrefix: '/ful-stack',
  // templates: {
  //   Blogpost: '/blog/:title'
  // },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://api:1337',
        contentTypes: ['blogpost'],
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }
  ],
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
}
